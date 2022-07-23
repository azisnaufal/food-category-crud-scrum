const Category = require("../models/Category");
const Food = require("../models/Food");

module.exports = {
  index: async (req, res) => {
    return res.render('index');
  },
};
