'use strict';

const PostCategoryModel = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  },
    {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false,
    });
  return postCategory;
};

module.exports = PostCategoryModel;