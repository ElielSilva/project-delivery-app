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
    const { userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      sales
    } = saleData;

    const { dataValues } = await Sales.create({
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
    });

    await sales.forEach(({ productId, quantity }) => {
      SalesProducts.create({
        saleId: dataValues.id,
        productId,
        quantity,
      });
    });

    return { ...dataValues, sales };
  },
};