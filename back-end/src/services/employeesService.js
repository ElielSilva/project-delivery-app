const { Users } = require('../database/models');

module.exports = {
  getEmployees: async () => {
    const employees = Users.findAll(
      { where: { role: 'seller' }, attributes: { exclude: ['password'] } },
    );
    return employees;
  },
};