const { validateFieldsEmailOrPw } = require('./validateLogin');
const { validateDisplayName } = require('./validateUserDn');
const { validateEmail } = require('./validateUserEmail');
const { validatePassword } = require('./validateUserPw');

module.exports = {
    validateFieldsEmailOrPw,
    validateDisplayName,
    validateEmail,
    validatePassword,
};