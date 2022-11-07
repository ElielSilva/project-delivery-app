const { Router } = require('express');
const customerController = require('../controllers/customerController');

const customerRouter = Router();

customerRouter.get('/orders', customerController.getAll);

module.exports = customerRouter;