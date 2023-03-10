module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    totalPrice: {
      type: DataTypes.DECIMAL(4,2),
      // get() {
      //   const value = this.getDataValue('totalPrice');
      //   return value ? parseFloat(value) : 0;
      // }
    },
    deliveryAddress: DataTypes.STRING(255),
    deliveryNumber: DataTypes.STRING(50),
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING(50),
      defaultValue: 'Pendente',
    },
  },
  {
    timestamps: false,
    tableName: 'sales',
    underscored: true,
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users,
      { foreignKey: 'userId', as: 'user' }
    );

    Sales.belongsTo(models.Users,
      { foreignKey: 'sellerId', as: 'seller' }
    );

    Sales.hasMany(models.sales_products,
      { foreignKey: 'saleId', as: 'sales' }
    );
  };

  return Sales;
};