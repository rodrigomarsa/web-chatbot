const { Message } = require('../database/models');

const createMessage = async (content, userId) => {
  const newMessage = await Message.create({ content, userId });

  return newMessage;
};

const findAllMessages = async () => {
  const messages = await Message.findAll();

  return messages;
};

module.exports = {
  createMessage,
  findAllMessages,
};
