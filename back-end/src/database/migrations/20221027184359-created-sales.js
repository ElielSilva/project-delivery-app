module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false,
        field: 'total_price',
      },
      deliveryAddress:{
        type: Sequelize.STRING(100),
        allowNull: false,
        field: 'delivery_address',
      },
      deliveryNumber:{
        type: Sequelize.STRING(50),
        allowNull: false,
        field: 'delivery_number',
      },
      saleDate:{
        type: Sequelize.DATE(),
        allowNull: false,
        field: 'sale_date',
      },
      status:{
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      userId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      sellerId:{
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'seller_id',
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('sales');
  },
};