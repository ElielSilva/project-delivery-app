const { SalesProducts, Sales } = require('../database/models');

module.exports = {
  create: async (saleData) => {
    const { userId, sellerId, totalPrice, deliveryAddress,
      deliveryNumber, sales } = saleData;

    const { dataValues } = await Sales.create({
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber });

    await sales.forEach(({ productId, quantity }) => {
      SalesProducts.create({
        saleId: dataValues.id,
        productId,
        quantity,
      });
    });

    return { ...dataValues, sales };
  },

  getAll: async (sellerId) => {
    const dataValues = await Sales.findAll(
      { where: { sellerId } }
    );
    return dataValues;
  },
};