const { User } = require('../models');

const userRegistered = async (email) => {
    const result = await User.findOne({ where: { email } });
    return result;
};

const postUser = async (displayName, email, password, image) => {
    const result = await User.create({ displayName, email, password, image });
    return result;
};

const allUsers = async () => {
    const result = await User.findAll({ attributes: { exclude: ['password'] } });
    return result;
};

module.exports = {
    userRegistered,
    postUser,
    allUsers,
};