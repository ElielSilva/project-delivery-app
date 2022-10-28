module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts',
    {
      quatity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      underscored: true, 
      tableName: 'salesProducts'
    },
  );
  SalesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      as: 'Products',
      through: SalesProducts,
      foreignKey: 'sale_id', // se refere ao id de Book na tabela de `users_books`
      otherKey: 'product_Id', // se refere a outra chave de `users_books` 
    });
    models.Products.belongsToMany(models.Sales, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'sale_id',  // se refere ao id de User na tabela de `users_books`
      otherKey: 'product_Id',
    });
  };

  return SalesProducts;
};
