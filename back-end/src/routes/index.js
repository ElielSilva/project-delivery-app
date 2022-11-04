const { Router } = require('express');
const loginRouter = require('./loginRouter');
const salesRouter = require('./salesRouter');
const employeesRouter = require('./employeesRoute');
const registerRouter = require('./registerRouter');
const usersRouter = require('./usersRouter');
const costumerProductsRouter = require('./costumerProducts');

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/sales', salesRouter);
routes.use('/employees', employeesRouter);
routes.use('/register', registerRouter);
routes.use('/users', usersRouter);
routes.use('/customer', costumerProductsRouter);

module.exports = routes;
