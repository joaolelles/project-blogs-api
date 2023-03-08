const express = require('express');
const { userController } = require('../controllers');
const { validateDisplayName, validateEmail, validatePassword } = require('../middlewares');

const router = express.Router();

router.post('/', validateDisplayName, validateEmail, validatePassword, userController.postUser);

module.exports = {
    router,
};