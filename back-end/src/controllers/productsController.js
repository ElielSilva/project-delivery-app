const productsService = require('../services/productsService');

const costumerProductsController = async (_req, res) => {
  const data = await productsService();
  res.status(200).json(data);
};

module.exports = costumerProductsController;