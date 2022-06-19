const indexController = require('../controllers/index.controller');
const foodController = require('../controllers/food.controller');
const auth = require('../middlewares/auth');
const router = require('express').Router();

router.get('/', foodController.index);
router.get('/food/create', foodController.create);
router.post('/food/store', foodController.store);

module.exports = router;
