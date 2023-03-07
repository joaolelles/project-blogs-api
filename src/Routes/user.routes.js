const express = require('express');
const userController = require('../controllers/user.controller');
const { validateUser } = require('../middlewares');

const router = express.Router();

router.post('/', validateUser, () => userController.postUser);

module.exports = router;