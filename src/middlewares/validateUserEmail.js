const validateEmail = (req, res, next) => {
    const { email } = req.body;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex(email)) {
        return res.status(400)
            .json({ message: '"email" must be a valid email' });
    }
    next();
};

module.exports = {
    validateEmail,
};