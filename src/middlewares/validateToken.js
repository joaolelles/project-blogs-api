const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const authToken = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: 'Token not found' });
    }

    try {
        const payload = jwt.verify(authorization, secret);
        req.user = payload;

        return next();
    } catch (error) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = authToken;