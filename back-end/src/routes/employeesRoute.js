const Router = require('express').Router;
const employeeController = require('../controllers/employeeController');

const employeesRouter = Router();

employeesRouter.get('/', employeeController.getEmployees);

module.exports = employeesRouter;