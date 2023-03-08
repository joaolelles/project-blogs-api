const express = require('express');
const { userController } = require('../controllers');
const {
    validateDisplayName,
    validateEmail,
    validatePassword,
} = require('../middlewares');
const validateToken = require('../middlewares/validateToken');

const router = express.Router();

router.post('/', validateDisplayName, validateEmail, validatePassword, userController.postUser);
router.get('/', validateToken, userController.allUsers);

module.exports = {
    router,
};