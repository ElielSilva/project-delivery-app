const express = require('express');
const costumerProductsController = require('../controllers/costumerProductsController');

const costumerProductsRouter = express.Router();

costumerProductsRouter.use(express.json());

costumerProductsRouter.get('/', 
(req, res) => { costumerProductsController(req, res); });

module.exports = costumerProductsRouter;