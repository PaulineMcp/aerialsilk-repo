 # 🧩 Objectif général :
On veut :
-    Ouvrir une page web.
-    Taper le nom exact d’une pirouette dans une barre de recherche.
-    Cliquer sur un bouton (ou déclencher une action).
-    Que le nom et l’explication s’affichent, si cette pirouette est bien présente dans le fichier CSV.

# Étapes
### 1. Préparer la base de données
-    Fichier CSV avec au moins deux colonnes : nom_pirouette et explication.
-    Ce fichier sera lu par le serveur Node.js, donc il doit être dans ton dossier de projet.
-    Ce fichier représente ta base de données, pour cet exercice simple.

### 2. Créer une interface utilisateur (le front)
Tu dois créer une page HTML qui contient :
-    Une barre de recherche (champ texte).
-    Un bouton de recherche (ou une action quand on appuie sur Entrée).
-    Un endroit pour afficher les résultats (nom + explication)

### 3. Créer un serveur avec Node.js + Express
Tu crées un serveur web très simple avec :
    - Node.js
    - Express (pour le routage)

Ce serveur doit faire deux choses :
    -    Servir les fichiers HTML/CSS/JS statiques pour que la page s’affiche dans le navigateur.
    -    Gérer une route d’API qui reçoit un mot-clé (le nom de la pirouette) et qui retourne, si elle existe, les infos depuis le CSV.

### 4. Créer une route API pour rechercher une pirouette

Tu dois créer une route genre :

  -   GET /api/pirouette?nom=pirouetteExacte

Et dans cette route, tu fais :
-    Lire le fichier CSV.
- Rechercher la ligne où le nom correspond exactement.

Si trouvé, tu retournes un objet { nom, explication }.
Sinon, tu retournes un message d’erreur ou une réponse vide.

### 5. Relier le front au back

Dans ton code JavaScript côté navigateur :

    - Tu captes ce que l’utilisateur a tapé dans l’input.
    - Tu fais un appel fetch() vers ton API avec le nom recherché.

    Tu reçois une réponse en JSON.

    Tu l’affiches proprement dans la page.
