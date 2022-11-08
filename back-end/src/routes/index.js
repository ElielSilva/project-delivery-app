const { Router } = require('express');
const loginRouter = require('./loginRouter');
const salesRouter = require('./salesRouter');
const employeesRouter = require('./employeesRoute');
const registerRouter = require('./registerRouter');
<<<<<<< HEAD
const productsRouter = require('./productsRouter');
const costumerRouter = require('./customerRouter');
=======
const adminRouter = require('./adminManage');
// const costumerProductsRouter = require('./costumerProducts');
>>>>>>> 27ed99968f7a5173a41115b0203bda9c90b94caf

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/sales', salesRouter);
routes.use('/employees', employeesRouter);
routes.use('/register', registerRouter);
<<<<<<< HEAD
routes.use('/products', productsRouter);
routes.use('/customers', costumerRouter);
=======
routes.use('/admin/manage', adminRouter);
>>>>>>> 27ed99968f7a5173a41115b0203bda9c90b94caf

module.exports = routes;
