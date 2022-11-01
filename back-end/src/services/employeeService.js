const { Users } = require('../database/models');

module.exports = {
  getEmployees: async () => {
    return Users.findAll({ where: { role: 'seller' }});
  }
}