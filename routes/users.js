/**
 * routes/users.js
 * 
 * Définition des routes REST pour gérer les utilisateurs :
 * - GET /users         : récupérer tous les utilisateurs
 * - POST /users        : créer un nouvel utilisateur
 * - GET /users/:id     : récupérer un utilisateur par ID
 * - PUT /users/:id     : mettre à jour un utilisateur par ID
 * - DELETE /users/:id  : supprimer un utilisateur par ID
 */

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User'); // ✅ bon chemin

// ✅ Middleware optionnel pour valider l'ID MongoDB
router.param('id', (req, res, next, id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'ID invalide' });
  }
  next();
});

// 🔹 GET - Retourner tous les utilisateurs
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🔹 POST - Ajouter un nouvel utilisateur
router.post('/', async (req, res) => {
  const { name, email, age } = req.body;
  const newUser = new User({ name, email, age });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 🔹 GET - Récupérer un utilisateur par ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
});

// 🔹 PUT - Modifier un utilisateur par ID
// ⚠️ Cette méthode remplace toutes les données de l'utilisateur (contrairement à PATCH qui ne modifie que certaines)
router.put('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 🔹 DELETE - Supprimer un utilisateur par ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) return res.status(404).json({ message: 'Utilisateur non trouvé' });
    res.json({ message: 'Utilisateur supprimé avec succès' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
