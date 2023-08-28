const { Message } = require('../database/models');

const createMessage = async (content, userId) => {
  const newUser = await Message.create({ content, userId });

  return newUser;
};

const findAllMessages = async () => {
  const messages = await Message.findAll();

  return messages;
};

module.exports = {
  createMessage,
  findAllMessages,
};
