const Category = require("../models/Category");
const Food = require("../models/Food");

module.exports = {
    index: async (req, res) => {
        const categories = await Category.findAll();
        return res.render('category/index',{
          categories
        })
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

        return res.redirect('/category');
    },

    edit: async (req, res) => {
        const category = await Category.findOne({
            where: {
                id: req.params.id
            }
        });

        return res.render('category/edit', {
            category
        });
    },

    update: async (req, res) => {
        await Category.update({
          name : req.body.name,
        }, {
          where : {
            id: req.params.id
          }
        });
    
        return res.redirect('/category');
      },

      delete : async(req, res) =>{
        await Food.destroy({
          where:{
            id_category: req.params.id
          }
        })
        await Category.destroy({
          where: {
            id: req.params.id
          }
        })
        return res.redirect('/category')
      },
};
