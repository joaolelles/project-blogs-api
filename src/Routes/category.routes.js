const express = require('express');
const { categoryController } = require('../controllers');
const { validateFieldName, authToken } = require('../middlewares');

const router = express.Router();

router.post('/', authToken, validateFieldName, categoryController.postCategory);
router.get('/', authToken, categoryController.getCategory);

module.exports = {
    router,
};