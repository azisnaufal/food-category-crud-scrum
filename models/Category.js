const { DataTypes } = require('sequelize');
const db = require('../database');

const Category = db.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.TEXT,
});

module.exports = Category;
