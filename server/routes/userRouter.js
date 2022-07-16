const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

// Create a user in the database
router.post('/', UserController.createUser, 
  (req, res) => res.status(201).json(res.locals.newUser));

// Gets a user from the database
router.get('/:username', UserController.getUser,
  (req, res) => res.status(200).json(res.locals.user));

// Adds a workspace to the user favorites
router.patch('/:username', UserController.addFavorite,
  (req, res) => res.status(200).json(res.locals.updatedUser));

// Deletes a user from the database
router.delete('/:username', UserController.deleteUser,
  (req, res) => res.status(200).json(res.locals.deletedUser));

module.exports = router;