const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const postUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    const userRegistered = await userService.userRegistered(email);
    if (userRegistered) {
        res.status(409).json({ message: 'User already registered' });
    }
    const user = await userService.postUser(displayName, email, password, image);
    const { password: _, ...userWithoutPassword } = user.dataValues;
    const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);

    res.status(201).send({ token });
};

const allUsers = async (_req, res) => {
    const users = await userService.allUsers();
    return res.status(200).json(users);
};

module.exports = {
    postUser,
    allUsers,
};