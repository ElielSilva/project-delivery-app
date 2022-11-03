const { Router } = require('express');
const checkoutController = require('../controllers/checkoutController');
const costumerProductsController = require('../controllers/costumerProductsController');


const customerRouter = Router();

customerRouter.post('/orders', checkoutController.create);
customerRouter.get('/products', costumerProductsController)


module.exports = customerRouter;