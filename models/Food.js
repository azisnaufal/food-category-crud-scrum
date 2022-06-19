const { DataTypes } = require('sequelize');
const db = require('../database');
const Category = require('./Category');

const Food = db.define('Food', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.TEXT,
  id_category: DataTypes.INTEGER,
  ingredients: DataTypes.TEXT,
  directions : DataTypes.TEXT,
});

Food.belongsTo(Category, {
  foreignKey: 'id_category'
});

module.exports = Food;
