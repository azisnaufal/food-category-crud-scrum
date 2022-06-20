const Category = require("../models/Category");
const Food = require("../models/Food");

module.exports = {
    index: async (req, res) => {
        const foods = await Food.findAll(
            {
                include:[
                    {model: Category}
                ]
            }
        );

        return res.render('food/index',{
            foods
        });
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
    
    edit: async (req, res) => {
        const food = await Food.findOne({
          where: { 
            id: req.params.id 
          }
        });

        const categories = await Category.findAll();
        return res.render('food/edit', {
          food,categories
        });
    },

    update: async (req, res) => {
        await Food.update({
          name : req.body.name,
          id_category : req.body.id_category,
          ingredients : req.body.ingredients,
          directions : req.body.directions,
        }, {
          where : {
            id: req.params.id
          }
        });
    
        return res.redirect('/');
      }, 

      delete: async (req, res) =>{
        await Food.destroy({
          where:{
            id: req.params.id
          }
        })
        return res.redirect('/')
      }
};
