const checkoutService = require('../services/checkoutService');

module.exports = {
  create: async (req, res) => {
    const newSale = checkoutService.create(req.body);
    res.status(204).json(newSale);
  },
};