const costumerProductsService = require('../services/costumerProductsService');

const costumerProductsController = async (_req, res) => {
  const data = await costumerProductsService();
  res.status(200).json(data);
};

module.exports = costumerProductsController;