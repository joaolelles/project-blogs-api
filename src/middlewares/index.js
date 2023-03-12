const { validateFieldsEmailOrPw } = require('./validateLogin');
const { validateDisplayName } = require('./validateUserDn');
const { validateEmail } = require('./validateUserEmail');
const { validatePassword } = require('./validateUserPw');
const { validateFieldName } = require('./validateCategory');
const { validatePost } = require('./validatePost');
const { authToken } = require('./validateToken');

module.exports = {
    validateFieldsEmailOrPw,
    validateDisplayName,
    validateEmail,
    validatePassword,
    validateFieldName,
    validatePost,
    authToken,
};