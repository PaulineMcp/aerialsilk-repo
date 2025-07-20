# IMPORTANT
- Pour démarrer/lancer/allumer le serveur on fait **node express_serveur**
- Avec nodemon, on fait **nodemon express_serveur**
- Adresse locale : http://localhost:8080/

# NEXT STEP : 
--- Implementer un moteur de recherche plus large
--- Servir les vidéos au bon format pour qu'elles puissent être affichées
--- Gérer en JS l'affichage des résultats (cacher la div avant la recherche et afficher autant de div de résultats que nécéssaires)


# JOURNAL 
19-06-2025 : Nettoyage du code et mise au propre d'une partie des commentaires
23-06-2025 : Nettoyage du code
28-06-2025 : Changement de mot de passe du SQL, nettoyage du code
01-07-2025 : Réparation de la requête via SQL, ajout des path pour videos dans le CSV (pas la DB SQL). Concernant les vidéos
06-07-2025 : Connexion du statique au serveur. Mise en place de l'interface Ajax de la page d'accueil. Essai affichage vidéo dans les résultats

# QUESTIONS AU FIL DE L'EAU 
- Qu'est-ce qu'un "projet Node" ?
- Quelle est la différence en JS entre les méthodes Require et Import ?
- Quelle est la différence entre const et var en JS ?
- A quoi sert Express exactement ? Express est un framework de Node utilisé pour faciliter le routage. Il contient des fonctions GET, POST, DELETE déjà écrites sans qu'on ait besoin de les implémenter à la main
- A quoi sert le package.json créé automatiquement ? Et quid de package-lock.json ?
- $$ Différence entre une route et un middleware : une route correspond à une URL précise, alors qu'un middleware est entre ou avant les routes pour procéder à des traitements spéciaux
- Quel est l'intérêt d'envoyer des éléments qui seront affichés dans la console ? 
- $$ Un "res.send" clotûre la réponse du serveur. Toutes les actions passées après ne seront pas prises en compte.

- $$ Servir des fichiers statiques : les fichiers statiques sont des fichiers qui ne changent pas côté client. Ex : html, css js client, images etc...le serveur doit fournir ces ficheirs au navigateur. 
Ici on utilise : app.use(express.static(')); express.static est un middleware spécial de Express pour gérer les fichiers statiques.Sauf qu'il n'accepte pas de path vide, donc cette ligne ne marche pas. Il faut utiliser le code : app.use(express.static(path.join(__dirname,''))); 
Ici le .join est du JS classique
Et __dirname
$$
- Que fait le '.query' ? Après req et après connection
- Qu'est-ce que paparse_module ?
- Quelle est la différence entre app.get et app.use ? 
- Enjeux techniques du SQL : On a choisi une technologie SQL, ici MySQL et mysql2 comme driver. Qu'est-ce qu'un driver en SQL ?
- En terme de bonnes pratiques, quand on paramètre le SQL, il est recommandé d'utiliser des users spécifiques (et de leurs accorder des droits) et non pas root, pourquoi ?

# NOTES 
- Fonction utile pour détecter les erreurs de connections: 
    console.error('Erreur de connexion à MySQL :', err.message);

# Javascript
- Les chaînes de caractères sont entre backtiks et pas guillemets ?
- La fonction fetch
- La fonction await


# GESTION DE MYSQL

On commence par installer mysql2 avec le gestionnaire de package de node et la commande : npm install --save mysql2
- Quelle est la différence entre mysql et mysqld ? 
- Pourquoi dans mon terminal cela appelle par défaut Maria DB et pas MySQL ?

# SQL 
Quand on ouvre MariaDB, on est par défaut dans aucune base de données. Pour voir les databases existantes on peut faire : SHOW DATABASES;
Puis pour sélectionner une database, on fait : USE nom_bdd
Pour créer une table on utilise CREATE TABLE nom (XX int, XX txt)
Pour remplir une table depuis un document CSV on utilise LOAD DATA FILE

LOAD DATA INFILE 'aerialsilk/database.csv'
INTO TABLE figures
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(id_fig, name_fig, keywords, video_link);

# LINUX
- A quoi sert systemctl ? 
- mysql -u root -p ?
-losf ?

# Principe de la programmation Ajax

Il ne faut pas confondre le principe de la programmation Ajax et la 
Le principe de programmation Ajax est de ne pas provoquer un rechargement complet de la page lorsque le serveur est interrogé. 
- Qu'est ce qu'une API Native ?

Auparavant on utilise jQuery avec la méthode .ajax pour faciliter l'ajax mais plus ajd. 

# FULLTEXT en SQL

On crée un index sur les colonnes qu'on va utiliser pour la recherche avec les mots clés de l'utilisateur. En BDD, un index est une structure qui permet d'accélérer l'accès aux colonnes. 

# Navigateur HTML5
LE HTML5 a introduit (2014) une balise qui permet de lire des vidéos sans add-ons avec la balise <video>

HTML5 utilise le streaming par morceaux pour commencer la lecture rapidement, sauter à un moment doné dansla vidéo et ne pas charger tout d'un coup. 

Header range permet de demander une partie spécifique d'une ressource.
A quoi cela sert-il ? 


# Diff entre plugin et addon ?

# Affichage des vidéos et gestion du JS

# forEach en JS
# Faire un point sur toutes les fonctions document. qui existent
# XHR dans l'inspecteur ?

