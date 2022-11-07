const { Router } = require('express');
const employeeController = require('../controllers/employeesController');

const employeesRouter = Router();

employeesRouter.get('/sellers', employeeController.getEmployees);

module.exports = employeesRouter;