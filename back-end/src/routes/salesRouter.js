const { Router } = require('express');
const salesController = require('../controllers/salesController');

const salesRouter = Router();

salesRouter.post('/orders', salesController.create);
salesRouter.get('/sellers', salesController.getAll);

module.exports = salesRouter;