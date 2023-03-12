const { BlogPost, Category, PostCategory } = require('../models');

const createBlogPost = async (title, content, categoryIds, userId) => {
    const promise = categoryIds.every((id) => Category.findOne({ where: { id } }));
    const result = await Promise.all(promise);
    if (!result) {
        return { message: 'one or more "categoryIds" not found' };
    }
    const sucessfullBlogPost = await BlogPost.create(title, content, userId);
    const referentInterTable = categoryIds.map((id) => PostCategory.create({
        categoryId: id,
        postId: sucessfullBlogPost.id,
    }));
    await Promise.all(referentInterTable);
    return sucessfullBlogPost;
};

module.exports = {
    createBlogPost,
};