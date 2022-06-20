const indexController = require('../controllers/index.controller');
const foodController = require('../controllers/food.controller');
const categoryController = require('../controllers/category.controller');
const auth = require('../middlewares/auth');
const Category = require('../models/Category');
const router = require('express').Router();


router.get('/', foodController.index);
router.get('/food/create', foodController.create);
router.post('/food/store', foodController.store);
router.get('/food/:id/edit', foodController.edit);
router.post('/food/:id/edit', foodController.update);
router.get('/category/:id/edit', categoryController.edit);
router.post('/category/:id/edit', categoryController.update);
router.get('/food/:id/delete', foodController.delete);
router.get('/category/:id/delete', categoryController.delete);
router.get('/category', categoryController.index);
module.exports = router;
