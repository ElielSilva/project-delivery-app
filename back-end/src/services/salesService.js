const { SalesProducts, Sales } = require('../database/models');

// const exampleObj = {
//   userId: 1,
//   sellerId: 1,
//   totalPrice: 100.00,
//   deliveryAddress: 'street',
//   deliveryNumber: 1,
//   status: 'pending',
//     sales: [{ productId: 1, quantity: 1 }],
// }

module.exports = {
  create: async (saleData) => {
    const { userId, sellerId, totalPrice, deliveryAddress,
      deliveryNumber } = saleData;

    console.log('checkoutService create====>>>>');

    const newSaleProduct = await Sales.create({
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber,
    });

    console.log('checkoutService create====>>>>', newSaleProduct.dataValues);
    return newSaleProduct.dataValues;
  },
};