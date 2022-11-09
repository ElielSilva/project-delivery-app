const salesService = require('../services/salesService');

module.exports = {
  create: async (req, res) => {
    const newSale = await salesService.create(req.body);
    res.status(201).json(newSale);
  },

  getBySellerId: async (req, res) => {
    const sellerOrders = await salesService.getBySellerId(req.id);
    res.status(200).json(sellerOrders);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const salesFromId = await salesService.getById(id);
    res.status(200).json(salesFromId);
  },
};