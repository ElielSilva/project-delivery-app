const { SalesProducts } = require('../database/models');

module.exports = {
  //  ainda sera implementada
  create: async (data) => {
    console.log('checkoutService create====>>>>', data);
    const newSaleProduct = await SalesProducts.create({});
    return newSaleProduct;
  }
}