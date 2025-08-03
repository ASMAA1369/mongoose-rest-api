// models/User.js

const mongoose = require('mongoose');

// ✅ Définition du schéma Mongoose pour un utilisateur
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,         // le nom est obligatoire
  },
  email: {
    type: String,
    required: true,         // l’email est obligatoire
    unique: true,           // doit être unique
  },
  age: {
    type: Number,
    default: 18,            // optionnel, valeur par défaut = 18
  }
});

// ✅ Export du modèle 'User' basé sur le schéma
module.exports = mongoose.model('User', userSchema);
