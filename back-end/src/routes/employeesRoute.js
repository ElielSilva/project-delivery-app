const Router = require('express').Router;
const employeeController = require('../controllers/employeesController');

const employeesRouter = Router();

employeesRouter.get('/', employeeController.getEmployees);

module.exports = employeesRouter;