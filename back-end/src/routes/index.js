const { Router } = require('express');
const loginRouter = require('./loginRouter');
const customerRouter = require('./customerRouter');
const employeesRouter = require('./employeesRoute');
const registerRouter = require('./registerRouter');
const adminRouter = require('./adminManage');
// const costumerProductsRouter = require('./costumerProducts');

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/customer', customerRouter);
routes.use('/employees', employeesRouter);
routes.use('/register', registerRouter);
routes.use('/admin/manage', adminRouter);

module.exports = routes;
