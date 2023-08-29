const MessageModel = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    'Message',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      content: DataTypes.STRING,
      from: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      published: DataTypes.DATE,
    },
    {
      timestamps: false,
      tableName: 'messages',
      underscored: true,
    }
  );

  Message.associate = (models) => {
    Message.belongsTo(models.User, { foreignKey: 'userId', as: 'users' });
  };

  return Message;
};

module.exports = MessageModel;
