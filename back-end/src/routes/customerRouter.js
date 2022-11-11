const { Router } = require('express');
const customerController = require('../controllers/customerController');
const auth = require('../middlewares/auth');

const customerRouter = Router();

customerRouter.get('/orders', auth, customerController.getAll);

module.exports = customerRouter;