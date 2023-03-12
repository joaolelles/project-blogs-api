const express = require('express');
const { authToken, validatePost } = require('../middlewares');
const { postController } = require('../controllers');

const router = express.Router();
router.post('/', authToken, validatePost, postController.createBlogPost);

module.exports = {
    router,
};