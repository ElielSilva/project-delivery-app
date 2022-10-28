module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    Name: DataTypes.STRING(255),
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

  // User.associate = (models) => {
  //   User.hasMany(models.BlogPost,
  //     { foreignKey: 'userId', as: 'blogPosts' });
  // };

  User.associate = (models) => {
    User.hasMany(models.sales,
      { foreignKey: 'user_id', as: 'sales' });
  };

  return User;
};