const { User } = require('../models');

const postLogin = async (email, password) => {
    const user = await User.findOne({ where: { email, password } });
    return user;
};

module.exports = {
    postLogin,
};