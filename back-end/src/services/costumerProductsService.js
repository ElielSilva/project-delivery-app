const { Products } =  require('../database/models');

const errorMessage = { status: 404, message: 'Products not found' };

const costumerProductsService = async () => {
  const prods = await Products.findAll();
  if (!prods) throw errorMessage;
  return prods;
};

module.exports = costumerProductsService;