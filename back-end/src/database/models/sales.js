module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    total_price: DataTypes.INTEGER,
    delivery_address: DataTypes.STRING(255),
    delivery_number: DataTypes.STRING(50),
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING(50),
    users_id: { type: DataTypes.INTEGER, foreignKey: true },
    seller_id: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    timestamps: false,
    tableName: 'sales',
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.User,
      { foreignKey: 'ser_id', as: 'Users' });
  };

  Sales.associate = (models) => {
    Sales.belongsTo(models.User,
      { foreignKey: 'saller_id', as: 'Users' });
  };

  return Sales;
};