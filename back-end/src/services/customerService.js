const { Products, Sales } = require('../database/models');

module.exports = {
  getAll: async (userId) => {
    const dataValues = await Sales.findAll({ 
      where: { userId },
      include: {
        model: Products,
        as: 'products',
        attributes: ['id', 'name', 'price'],
        through: { attributes: ['saleId', 'quantity'], as: 'salesProducts' },
      },
    });
    return dataValues;
  },
};