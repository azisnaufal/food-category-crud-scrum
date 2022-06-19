const Category = require("../models/Category");
const Food = require("../models/Food");

module.exports = {
    index: async (req, res) => {
        return res.render('food/index');
    },

    create: async (req, res) => {
        const cotegories = await Category.findAll();
        return res.render('food/create', { cotegories });
    },

    store: async (req, res) => {
        await Food.create({
            name: req.body.name,
            id_category: req.body.id_category,
            ingredients: req.body.ingredients,
            directions: req.body.directions,
        });

        return res.redirect('/');
    },
};
