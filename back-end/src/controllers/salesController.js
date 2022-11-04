const salesService = require('../services/salesService');

module.exports = {
  create: async (req, res) => {
    const newSale = await salesService.create(req.body);
    console.log(newSale);
    res.status(201).json(newSale);
  },
};