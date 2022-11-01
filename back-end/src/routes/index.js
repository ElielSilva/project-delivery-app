const Router = require('express').Router;
const loginRouter = require('./loginRouter');
const customerRouter = require('./customerRouter');
const employeesRouter = require('./employeesRoute');

const routes = Router();

routes.use('/login', loginRouter);
routes.use('/customer', customerRouter);
routes.use('/employees', employeesRouter);

module.exports = routes;