const { categoryService } = require('../services');

const postCategory = async (req, res) => {
    const { name } = req.body;
    const category = await categoryService.postCategory(name);
    return res.status(201).json(category);
};

module.exports = {
    postCategory,
};