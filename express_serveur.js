// Création du projet Node dans le dossier de travail
const http_module = require('http') // pour créer un serveur http
const fs = require('fs');
const paparse_module = require('papaparse');

// Création du serveur avec Express (Express va appeler le serveur)
const express = require('express');
const app = express(); // Création d'un objet express

// Indiquer un port spécifique sur lequel le serveur doit écouter (ici on a déjà indiqué ci-dessus spécifiquement le port donc pas essentiel) et lancer le serveur
port = 8080
app.listen(port, () => {
  console.log(`Serveur en ligne sur http://localhost:${port}`);
});


// ROUTES

// Route test pour voir que le serveur marche bien
app.get('/test', (req,res) => {
    res.send('vous avez fait un test');
});

// Route avec mot-clé dans l'URL
app.get('/search',(req, res) => {
    const user_search = req.query.fig_search_by_user;
    res.send('vous avez cherché : '.concat(" ",user_search));
});
// Cette route a terme doit permettre de récupérer du contenu rentré dans la page HTML par l'utilisateur et dont le contenu est envoyé dans l'URL via une méthode GET par exemple "http://localhost:8080/search?fig_search_by_user=%22pomme%22"


// Route pour afficher la base de données
app.get('/database',(req, res) => {
 const data = paparse_module.parse(fs.readFileSync('database.csv', 'utf8'), { header: true }).data;
  res.send(data);
 });


// Servir les fichiers statiques
// Importation de la lib Path
const path = require('path');
// Mise à dispo des fichiers statiques : ici ils sont mis à dispo dans la root du serveur sauf que 
app.use(express.static(path.join(__dirname,'')));
// servir les fichiers statiques


// Route qui retourne le résultat iSsu de la base de données en fonction de la recherche du user
app.get('/search_user',(req,res) =>{
  // récupération du mot de l'utilisateur
  var user_search = req.query.fig_search_by_user;
  user_search = user_search.replaceAll('"', '');
  console.log(user_search);
  // récupération de la base de données
  const data = paparse_module.parse(fs.readFileSync('database.csv', 'utf8'), { header: true }).data;

  // Filtre sur la base de données
  const filtered_results = data.filter(figure => figure.name_fig == user_search);
  res.send(filtered_results);
});
// URL test : http://localhost:8080/search_user?fig_search_by_user=%22radiance%22 => fonctionne, renvoie bien les attributs de radiance


// Passage de la base de données en SQL pour pouvoir requêter dessus

// On appelle le SQL
const mysql = require('mysql2');
// Création du connecteur
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
database: 'aerialsilk',
password: 'Inna2025'
});

// Créons une nouvelle route spécialement pour le test du sql
app.get('/sql_test',(req,res) => {
  res.send('page test du sql')
});

// Nouvelle route qui requête en SQL sur la base en SQL
app.get('/sql_request',(req,res) => {
  connection.query('SELECT * FROM figures',(err, results) => {
    res.send(results); }); 
});

// Route avec un critère 
app.get('/sql_user_request_criteria',(req,res) => {
  var user_search = req.query.fig_searched_by_user;
  user_search = user_search.replaceAll('"', '');
  console.log(user_search);
  sql_request = `SELECT name_fig, keywords_clean, video_link, MATCH(name_fig, keywords_clean) AGAINST('${user_search}') AS score FROM figures WHERE MATCH(name_fig, keywords_clean) AGAINST('${user_search}') > 0.2 ORDER BY score DESC;`
  console.log(sql_request);

  connection.query(sql_request,(err, results) => {
  console.log(results);
  res.send(results); }); 
});

// URL test : http://localhost:8080/sql_user_request_criteria?fig_search_by_user=%22cupidon%22

