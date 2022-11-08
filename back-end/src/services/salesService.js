const { sales_products: SalesProducts, Sales, Products } = require('../database/models');

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

  getBySellerId: async ({ sellerId }) => {
    const dataValues = await Sales.findAll({
      where: { sellerId },
      include: { model: Products, as: 'products' },
    });
    return dataValues;
  },

  getById: async (id) => {
    const dataValues = await Sales.findAll({
      where: { id },
      include: { model: Products, as: 'products' },
    });
    return dataValues;
  },
};