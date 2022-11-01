const { Users } = require('../database/models');

module.exports = {
  getEmployees: async function() {
    return Users.findAll(
      { where: { role: 'seller' }, attributes: { exclude: ['password'] } },
    );
  },
};