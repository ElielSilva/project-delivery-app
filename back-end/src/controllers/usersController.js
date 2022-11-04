const usersService = require('../services/usersService');

module.exports = {
  getAll: async (req, res) => {
    const orders = await usersService.getAll(req.body);
    res.status(200).json(orders);
  },
};