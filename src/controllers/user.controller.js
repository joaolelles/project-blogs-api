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
    const user = await userService.postUser(displayName, email, password, image);
    if (userRegistered) {
        return res.status(409).json({ message: 'User already registered' });
    }
    const { password: _, ...userWithoutPassword } = user.dataValues;
    const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);

    res.status(201).send({ token });
};

module.exports = {
    postUser,
};