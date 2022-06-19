const indexController = require('../controllers/index.controller');
const auth = require('../middlewares/auth');
const router = require('express').Router();

router.get('/', indexController.index);

module.exports = router;
