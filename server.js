// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// ✅ Charger les variables d'environnement
dotenv.config({ path: './config/.env' });

const app = express();

// ✅ Middleware pour parser les requêtes JSON
app.use(express.json());

// ✅ Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connecté à MongoDB'))
  .catch((err) => console.error('❌ Erreur de connexion MongoDB :', err));

  // ✅ Route racine simple pour tester le serveur
app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API REST des utilisateurs 🧑‍💻');
});

// ✅ Importer et utiliser les routes
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

// ✅ Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});

