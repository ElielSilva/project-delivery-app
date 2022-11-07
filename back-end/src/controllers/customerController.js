const customerService = require('../services/customerService');

module.exports = {
  getAll: async (req, res) => {
    const orders = await customerService.getAll(req.body);
    res.status(200).json(orders);
  },
};