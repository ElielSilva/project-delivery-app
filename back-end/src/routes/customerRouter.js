const { Router } = require('express');
const checkoutController = require('../controllers/checkoutController');

const customerRouter = Router();

customerRouter.post('/orders', checkoutController.create);

module.exports = customerRouter;