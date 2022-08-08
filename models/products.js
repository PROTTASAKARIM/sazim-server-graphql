'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({

    title: DataTypes.STRING,
    categories: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    rent: DataTypes.STRING,
    rentoption: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
    tableName: 'products'
  });
  return Products;
};