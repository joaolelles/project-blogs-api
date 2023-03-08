const { User } = require('../models');

// const postUser = async (displayName, email, password, image) => {
//     const userRegistered = await User.findOne({ where: { email } });
//     if (userRegistered) {
//         return userRegistered;
//     }
//     const newUser = await User.create({ displayName, email, password, image });
//     return newUser;
// };

const userRegistered = async (email) => {
    const result = await User.findOne({ where: { email } });
    return result;
};

const postUser = async (displayName, email, password, image) => {
    const result = await User.create({ displayName, email, password, image });
    return result;
};

module.exports = {
    userRegistered,
    postUser,
};