const { Category } = require('../models');

const postCategory = async (name) => {
    const result = await Category.create({ name });
    return result;
};

module.exports = {
    postCategory,
};