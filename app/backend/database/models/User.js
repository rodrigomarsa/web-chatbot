const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  }
  );

  User.associate = (models) => {
    User.hasMany(models.Message,
      { foreignKey: 'userId', as: 'messages' });
  };

  return User;
};

module.exports = UserModel;
