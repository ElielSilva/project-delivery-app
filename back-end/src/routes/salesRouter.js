const { Router } = require('express');
const salesController = require('../controllers/salesController');
const auth = require('../middlewares/auth');
// import statusUpdateMiddleware from '../middlewares/update'

const salesRouter = Router();

salesRouter.post('/orders', salesController.create);
salesRouter.get('/orders/:id', salesController.getById);
salesRouter.patch('/status/:id/:newStatus', salesController.statusUpdate);
salesRouter.get('/sellers', auth, salesController.getBySellerIdOrders);
salesRouter.get('/sellers/:id', auth, salesController.getBySellerId);
salesRouter.put('/sellers/:id', auth, salesController.updateBySaleId);

module.exports = salesRouter;