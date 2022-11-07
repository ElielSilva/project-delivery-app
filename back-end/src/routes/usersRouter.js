const { Router } = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = Router();

usersRouter.get('/orders', usersController.getAll);

module.exports = usersRouter;