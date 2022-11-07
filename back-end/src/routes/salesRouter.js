const { Router } = require('express');
const salesController = require('../controllers/salesController');
const auth = require('../middlewares/auth');

const salesRouter = Router();

salesRouter.post('/orders', salesController.create);
salesRouter.get('/sellers', auth, salesController.getAll);

module.exports = salesRouter;