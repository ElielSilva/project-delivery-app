const { Router } = require('express');
const loginRouter = require('./loginRouter');
const salesRouter = require('./salesRouter');
const employeesRouter = require('./employeesRoute');
const registerRouter = require('./registerRouter');
const productsRouter = require('./productsRouter');
const costumerRouter = require('./customerRouter');

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/sales', salesRouter);
routes.use('/employees', employeesRouter);
routes.use('/register', registerRouter);
routes.use('/products', productsRouter);
routes.use('/customers', costumerRouter);

module.exports = routes;
