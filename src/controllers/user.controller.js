const jwt = require('jsonwebtoken');
const { userService } = require('../services');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const postUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await userService.postUser(email, password);

    if (!user) {
        return res.status(400).send({ message: 'Invalid fields' });
    }

    const { password: _, ...userWithoutPassword } = user.dataValues;

    const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);

    res.status(200).send({ token });
};

module.exports = {
    postUser,
};