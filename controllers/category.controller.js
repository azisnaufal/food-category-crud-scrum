const Category = require("../models/Category");

module.exports = {
    index: async (req, res) => {
        return res.render('category/index');
    },

    create: async (req, res) => {
        return res.render('category/create');
    },

    store: async (req, res) => {
        await Category.create({
            name: req.body.name,
            id_category: req.body.id_category,
            ingredients: req.body.ingredients,
            directions: req.body.directions,
        });

        return res.redirect('/');
    },
};
