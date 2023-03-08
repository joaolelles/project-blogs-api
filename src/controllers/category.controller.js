const { categoryService } = require('../services');

const postCategory = async (req, res) => {
    const { name } = req.body;
    const category = await categoryService.postCategory(name);
    return res.status(201).json(category);
};

const getCategory = async (req, res) => {
    const categories = await categoryService.getCategory();
    return res.status(200).json(categories);
};

module.exports = {
    postCategory,
    getCategory,
};