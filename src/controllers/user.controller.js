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
        return res.status(409).json({ message: 'User already registered' });
    }
    const user = await userService.postUser(displayName, email, password, image);
    const { password: _, ...userWithoutPassword } = user.dataValues;
    const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);

    return res.status(201).send({ token });
};

const allUsers = async (_req, res) => {
    const users = await userService.allUsers();
    return res.status(200).json(users);
};

const userById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.userById(id);
    if (!user) {
        return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
};

module.exports = {
    postUser,
    allUsers,
    userById,
};