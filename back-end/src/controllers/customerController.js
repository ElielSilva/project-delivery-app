const customerService = require('../services/customerService');

module.exports = {
  getAll: async (req, res) => {
    const orders = await customerService.getAll(req.id);
    res.status(200).json(orders);
  },
};