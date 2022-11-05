module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    totalPrice: DataTypes.INTEGER,
    deliveryAddress: DataTypes.STRING(255),
    deliveryNumber: DataTypes.STRING(50),
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING(50),
      defaultValue: 'pending',
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

    Sales.hasMany(models.SalesProducts,
      { foreignKey: 'saleId', as: 'sales' }
    );
  };

  return Sales;
};