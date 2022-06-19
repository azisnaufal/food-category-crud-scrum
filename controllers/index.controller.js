const Category = require("../models/Category");
const Food = require("../models/Food");

module.exports = {
  index: async (req, res) => {
    const name = 'Tes';
    return res.render('index', { name });
  },
};
