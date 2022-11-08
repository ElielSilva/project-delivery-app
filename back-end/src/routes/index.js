const { Router } = require('express');
const loginRouter = require('./loginRouter');
const salesRouter = require('./salesRouter');
const employeesRouter = require('./employeesRoute');
const registerRouter = require('./registerRouter');
const productsRouter = require('./productsRouter');
const costumerRouter = require('./customerRouter');
const adminRouter = require('./adminManage');
// const costumerProductsRouter = require('./costumerProducts');

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/sales', salesRouter);
routes.use('/employees', employeesRouter);
routes.use('/register', registerRouter);
routes.use('/products', productsRouter);
routes.use('/customers', costumerRouter);
routes.use('/admin/manage', adminRouter);

module.exports = routes;
