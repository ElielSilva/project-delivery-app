module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING(255),
    email: {
      type:DataTypes.STRING(255),
      UNIQUE:true,
    },
    password: DataTypes.STRING(255),
    role: DataTypes.STRING(255),
  },
  {
    timestamps: false,
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(models.Sales,
      { foreignKey: 'userId', as: 'user' },
    );

    User.hasMany(models.Sales,
      { foreignKey: 'sellerId', as: 'seller' },
    );
  };

  return User;
};