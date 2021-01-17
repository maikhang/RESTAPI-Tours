const express = require('express');
const userController = require('../app/controllers/UserController');

// Users
const router = express.Router();

router
	.route('/')
	.get(userController.getAllUser)
	.post(userController.createNewUser);

router
	.route('/:id')
	.get(userController.getUser)
	.patch(userController.updateUser)
	.delete(userController.deleteUser);

module.exports = router;
