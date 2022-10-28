module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4,2),
    url_image: DataTypes.STRING(200),
  },
  {
    timestamps: false,
    tableName: 'users',
  });

  Products.associate = (models) => {
    Products.hasMany(models.SalesProducts,
      { foreignKey: 'product_id', as: 'salesProducts' });
  };

  return Products;
};