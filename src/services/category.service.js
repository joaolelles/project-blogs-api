const { Category } = require('../models');

const postCategory = async (name) => {
    const result = await Category.create({ name });
    return result;
};

const getCategory = async () => {
    const result = await Category.findAll();
    return result;
};

module.exports = {
    postCategory,
    getCategory,
};