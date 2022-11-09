const { Router } = require('express');
const salesController = require('../controllers/salesController');
const auth = require('../middlewares/auth');

const salesRouter = Router();

salesRouter.post('/orders', salesController.create);
salesRouter.get('/orders/:id', salesController.getById);
salesRouter.get('/sellers', auth, salesController.getBySellerIdOrders);
salesRouter.get('/sellers/:id', auth, salesController.getBySellerId);

module.exports = salesRouter;