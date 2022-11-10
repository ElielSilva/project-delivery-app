const { Router } = require('express');
const salesController = require('../controllers/salesController');

const salesRouter = Router();

salesRouter.post('/orders', salesController.create);
salesRouter.get('/orders/:id', salesController.getById);
salesRouter.patch('/status/:id/:newStatus', salesController.statusUpdate);
salesRouter.get('/sellers', salesController.getBySellerId);

module.exports = salesRouter;