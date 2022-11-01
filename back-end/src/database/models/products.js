module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4,2),
    url_image: DataTypes.STRING(200),
  },
  {
    timestamps: false,
    tableName: 'products',
  });

  Products.associate = (models) => {
    Products.hasMany(models.SalesProducts,
      { foreignKey: 'productId', as: 'salesProducts' });
  };

  return Products;
};