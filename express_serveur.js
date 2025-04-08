// pour commencer j'ai créé un projet node dans mon dossier
const http_module = require('http') // pour créer un serveur http
// diff avec require et import ??
// on utilise const var ??
// une auter façon de faire serait pour importer uniquement la fonction create server npconst { createServer } = require('node:http'); pour importer seulement la fonction
//const { createServer } = require('node:http');
//const server = http_module.createServer( // on devrait initialiser req si on voulait que ça réponde à une requete particulière
//    (req,res,next) => {res.statusCode = 200,
//                  res.end('hello lulu') // quelle est la diff avec res.end ??
//    }
//); // et ça par exemple, ce n'est pas déjà du routage ???
// si on ne passait pas par express, il faudrait implémenter manuellement les requêtes get, post, delete etc...

//server.listen(8080); // je lui indique sur quel port écouter

// DEFINIR LES ROUTES ET LES MIDDLESWARES

// on installe express dans le npm : est-ce que ça s'écrit automatiquement dans package.json
// kezako le fichier package-lock ???
const express = require('express');// pourquoi pour lancer node ou nodemon je n'ai pas besoin de lui indiquer l'extension du fichier .js
const app = express(); // création d'un objet express // je ne comprends pas pourquoi il faut forcément l'appeler epxress et app
// pourquoi const ??
// app.METHOD(PATH, HANDLER)
//const port = 3000; est-ce que je peux faire ça en substitution
app.listen(8080,()=>{
    console.log('serveur lancé sur 8080');
});

app.get('/user',(req, res) => {
    res.send('vous avez soumis une demande user');
  });


// retour suite à une demande get
//app.get('/user', (req,res) => {
//    res.send('vous avez soumis une demande user');
//}); // je comprends pas : est-ce que ça signifie que si le serveur reçoit cette requete 'get /' il renverra 

// pourquoi l'exo d'openclassroom passe par la creation d'un objet server qui a l'air d'être un objet node, pas un objet express
// attention à ne pas tout confondre, ici / est plutot le sous entendu de la requete, pas de la navigation d'un fichier à un autre

// // servir des fichiers statiques ?? : Servir les fichiers HTML/CSS/JS statiques pour que la page s’affiche dans le navigateur
// les fichiers statiques sotn des fichiers qui ne changent pas côté client, ex : html, css js client, images etc...le serveur doit fournir ces ficheirs au navigateur
const path = require('path');
app.use(express.static(path.join(__dirname, ''))); // donne l'accès à des fichiers statiques : le html, le téléchargemtn du csv
// à long terme il faut donner les bonnes autorisations 
// déchiffrer cette fonction

//app.listen(port, () => {
//  console.log(`Serveur en ligne sur http://localhost:${port}`);
//});