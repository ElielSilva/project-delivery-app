const salesService = require('../services/salesService');

module.exports = {
  create: async (req, res) => {
    const newSale = await salesService.create(req.body);
    res.status(201).json(newSale);
  },

  getBySellerIdOrders: async (req, res) => {
    const sellerOrders = await salesService.getBySellerIdOrders(req.id);
    res.status(200).json(sellerOrders);
  },

  getBySellerId: async (req, res) => {
    const sellerOrders = await salesService.getBySellerId(req.id, req.params.id);
    res.status(200).json(sellerOrders);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const saleFromId = await salesService.getById(id);
    res.status(200).json(saleFromId);
  },

  updateBySaleId: async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const salesFromId = await salesService.updateBySaleId(id, status);
    res.status(200).json(salesFromId);
  },
  statusUpdate: async (req, res) => {
    const { id, newStatus } = req.params;
    await salesService.statusUpdate({ id, newStatus });
    res.status(201).json();
  },

};