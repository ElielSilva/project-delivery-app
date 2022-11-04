const { Router } = require('express');
const salesController = require('../controllers/salesController');

const salesRouter = Router();

salesRouter.post('/orders', salesController.create);

module.exports = salesRouter;