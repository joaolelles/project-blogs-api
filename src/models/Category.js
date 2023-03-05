'use strict';
const CategoryModel = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    displayName: DataTypes.STRING,
    name: DataTypes.STRING,
  },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false,
    });
  return category;
};

module.exports = CategoryModel;