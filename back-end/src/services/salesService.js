const { sales_products: SalesProducts, Sales, Products } = require('../database/models');

const err = {
  orderNotFound: { status: 404, message: 'Order not found' },
};

module.exports = {
  create: async (saleData) => {
    const { userId, sellerId, totalPrice, deliveryAddress,
      deliveryNumber, sales } = saleData;

    const { dataValues } = await Sales.create({
      userId, sellerId, totalPrice, deliveryAddress, deliveryNumber });

    await Promise.all(sales.map(({ productId, quantity }) => (
      SalesProducts.create({
        saleId: dataValues.id,
        productId,
        quantity,
      })
    )));

    return { ...dataValues, sales };
  },

  getBySellerIdOrders: async (sellerId) => {
    const dataValues = await Sales.findAll({
      where: { sellerId },
      include: { model: Products, as: 'products' },
    });
    return dataValues;
  },

  getBySellerId: async (sellerId, saleId) => {
    const dataValues = await Sales.findAll({
      where: { sellerId, id: saleId },
      include: { model: Products, as: 'products' },
    });
    return dataValues;
  },

  getById: async (id) => {
    const dataValues = await Sales.findOne({
      where: { id },
      include: { model: Products,
        as: 'products',
        attributes: ['id', 'name', 'price'],
        through: { attributes: ['saleId', 'quantity'], as: 'salesProducts' },
      },
      
    });
    if (!dataValues) throw err.orderNotFound;
    return dataValues;
  },

  statusUpdate: async ({ id, newStatus }) => {
    console.log('sales service', id, newStatus);
    const status = newStatus === 'emtransito' ? 'Em transito' : newStatus;
    const dataValues = await Sales.update({
      status,
      }, {
        where: { id },
      });
    if (!dataValues) throw err.orderNotFound;
    return dataValues;
  },

  updateBySaleId: async (id, status) => {
    const [dataValues] = await Sales.update(
      { status },
      { where: { id } },
    );
    return dataValues;
  },
};