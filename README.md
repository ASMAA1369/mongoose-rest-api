# 📘 API REST Utilisateurs

Une API REST créée avec Node.js, Express, MongoDB (Mongoose) permettant de gérer des utilisateurs (CRUD complet).

## ⚙️ Technologies utilisées
- Node.js
- Express.js
- MongoDB (via Atlas)
- Mongoose
- dotenv
- Postman (pour les tests)

## Fonctionnalités

- Ajouter un utilisateur (POST /users)
- Obtenir tous les utilisateurs (GET /users)
- Obtenir un utilisateur par ID (GET /users/:id)
- Modifier un utilisateur (PUT /users/:id)
- Supprimer un utilisateur (DELETE /users/:id)

## 🔗 Routes de l'API

| Méthode | Route          | Description                    |
|---------|----------------|--------------------------------|
| GET     | /users         | Obtenir tous les utilisateurs  |
| GET     | /users/:id     | Obtenir un utilisateur par ID  |
| POST    | /users         | Ajouter un nouvel utilisateur  |
| PUT     | /users/:id     | Modifier un utilisateur par ID |
| DELETE  | /users/:id     | Supprimer un utilisateur par ID|

## Test avec Postman
La collection Postman se trouve dans `postman/user-api-tests.postman_collection.json`  
Les captures de tests sont dans le dossier `/captures`.
Tester les différentes routes en utilisant `http://localhost:5000/users`

## Installation

1. Cloner le dépôt
2. Installer les dépendances :

npm install
3. Créer un fichier `.env` dans `/config` :
MONGO_URI=mongodb://localhost:27017/persondb
PORT=5000
4. Lancer le serveur :
node server.js

# 👩‍🎓 Auteur

Ce projet a été réalisé par **ASMAA Jebbar** dans le cadre d'un checkpoint de création d'une API REST avec Node.js, Express et MongoDB.




