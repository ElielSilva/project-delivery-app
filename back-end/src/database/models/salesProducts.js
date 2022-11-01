module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts',
    {
      saleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        foreignKey: true,
      },
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscored: true, 
      tableName: 'salesProducts'
    },
  );

  SalesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_Id',
    });
    models.Products.belongsToMany(models.Sales, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return SalesProducts;
};