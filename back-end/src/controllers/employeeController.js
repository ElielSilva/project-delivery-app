const employeeService = require('../services/employeeService');

module.exports = {
  getEmployees: async (req, res) => {
    const employees = await employeeService.getEmployees(req.body);
    res.status(200).json(employees);
  },
}