const Category = require("../models/Category");

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
        await Category.destroy({
          where: {
            id: req.params.id
          }
        })
        return res.redirect('/categories')
      },
};
