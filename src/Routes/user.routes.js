const express = require('express');
const { userController } = require('../controllers');
const {
    validateDisplayName,
    validateEmail,
    validatePassword,
    authToken,
} = require('../middlewares');

const router = express.Router();

router.get('/:id', authToken, userController.userById);
router.post('/', validateDisplayName, validateEmail, validatePassword, userController.postUser);
router.get('/', authToken, userController.allUsers);

module.exports = {
    router,
};