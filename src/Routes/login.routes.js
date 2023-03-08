const express = require('express');
const { userController } = require('../controllers');
const { validateFieldsEmailOrPw } = require('../middlewares');

const router = express.Router();

router.post('/', validateFieldsEmailOrPw, userController.postLogin);

module.exports = {
    router,
};