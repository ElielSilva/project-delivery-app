'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        user_id: 3,
        seller_id: 2,
        total_price: 11.90,
        delivery_address: 'rua do fim, bairo nova vida, numero 7',
        delivery_number: '(99) 99999-9999',
        sale_date: new Date('oct 15 2002'),
        status: 'pending'
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales', null, {}); 
  }
};