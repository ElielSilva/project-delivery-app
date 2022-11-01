const { Router } = require('express');
const employeeController = require('../controllers/employeesController');

const employeesRouter = Router();

employeesRouter.get('/', employeeController.getEmployees);

module.exports = employeesRouter;