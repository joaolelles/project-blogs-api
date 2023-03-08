const express = require('express');
const { loginController } = require('../controllers');
const { validateFieldsEmailOrPw } = require('../middlewares');

const router = express.Router();

router.post('/', validateFieldsEmailOrPw, loginController.postLogin);

module.exports = {
    router,
};