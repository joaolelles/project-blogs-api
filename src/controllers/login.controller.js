const jwt = require('jsonwebtoken');
const { loginService } = require('../services');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const postLogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await loginService.postLogin(email, password);

    if (!user) {
        return res.status(400).send({ message: 'Invalid fields' });
    }

    const newUserId = user.dataValues.id;
    const token = jwt.sign({ data: { userId: newUserId } }, secret, jwtConfig);

    res.status(200).send({ token });
};

module.exports = {
    postLogin,
};