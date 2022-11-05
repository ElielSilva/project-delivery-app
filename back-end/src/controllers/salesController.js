const salesService = require('../services/salesService');

module.exports = {
  create: async (req, res) => {
    const newSale = await salesService.create(req.body);
    res.status(201).json(newSale);
  },

  getAll: async (req, res) => {
    const sales = await salesService.getAll(req.body);
    res.status(200).json(sales);
  },
};