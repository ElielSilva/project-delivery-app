module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id:{
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name:{
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      price:{
        type: Sequelize.FLOAT(10,2),
        allowNull: false,
      },
      urlImage:{
        type: Sequelize.STRING(200),
        allowNull: false,
        field: 'url_image',
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('products');
  },
};