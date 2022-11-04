const salesService = require('../services/salesService');

module.exports = {
  create: async (req, res) => {
    const newSale = await salesService.create(req.body);
    res.status(204).json(newSale);
  },
};