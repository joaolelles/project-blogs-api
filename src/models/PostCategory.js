'use strict';

const PostCategoryModel = (sequelize, DataTypes) => {
  const postCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },
    {
      tableName: 'posts_categories',
      underscored: true,
      timestamps: false,
    });
  postCategory.associate = ({ BlogPost, Category }) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: postCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    Category.belongsToMany(BlogPost, {
      as: 'blog_posts',
      through: postCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };
  return postCategory;
};

module.exports = PostCategoryModel;