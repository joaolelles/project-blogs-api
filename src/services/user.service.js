const { User } = require('../models');

const postLogin = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
    return user;
};

const postUser = async (displayName, email, password, image) => {
    const userRegistered = await User.findOne({ where: { email } });
    if (userRegistered) {
        return userRegistered;
    }
    if (!userRegistered) {
        const newUser = await User.create({ displayName, email, password, image });
        return newUser;
    }
};

module.exports = {
    postLogin,
    postUser,
};