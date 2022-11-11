'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales_products', [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 2,
      },
      {
        sale_id: 1,
        product_id: 2,
        quantity: 1,
      },
      {
        sale_id: 2,
        product_id: 1,
        quantity: 2,
      },
      {
        sale_id: 2,
        product_id: 2,
        quantity: 2,
      },
      {
        sale_id: 2,
        product_id: 3,
        quantity: 2,
      },
      {
        sale_id: 2,
        product_id: 4,
        quantity: 2,
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales_products', null, {}); 
  }
};

// id: 
//       totalPrice: 
//       deliveryAddress:
//       deliveryNumber:
//       saleDate:
//       status:
//       userId:
//       sellerId: