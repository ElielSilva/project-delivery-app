const { Router } = require('express');
const costumerProductsController = require('../controllers/costumerProductsController');

const customerRouter = Router();

customerRouter.get('/products', costumerProductsController);

module.exports = customerRouter;