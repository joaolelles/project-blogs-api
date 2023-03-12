const { postService } = require('../services');

const createBlogPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { payload } = req.user;
    const { data } = payload;
    const { userWithoutPassword } = data;
    const { id } = userWithoutPassword;
    const verifyPost = await postService.createBlogPost(title, content, categoryIds, id);
    if (verifyPost.message) {
        return res.status(400).json(verifyPost.message);
    }
    return res.status(201).json(verifyPost);
};

module.exports = {
    createBlogPost,
};