const indexController = require('../controllers/index.controller');
const foodController = require('../controllers/food.controller');
const categoryController = require('../controllers/category.controller');
const auth = require('../middlewares/auth');
const router = require('express').Router();

router.get('/', foodController.index);
router.get('/food/create', foodController.create);
router.post('/food/store', foodController.store);

router.get('/category', categoryController.index);
router.get('/category/create', categoryController.create);
router.post('/category/store', categoryController.store);

module.exports = router;
