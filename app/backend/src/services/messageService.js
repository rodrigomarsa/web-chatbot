const { Message } = require('../database/models');

const createMessage = async (messages, userId) => {
  const newMessages = await Promise.all(
    messages.map(({ content, from }) =>
      Message.create({ content, from, userId })
    )
  );

  return newMessages;
};

const findAllMessages = async () => {
  const messages = await Message.findAll();

  return messages;
};

module.exports = {
  createMessage,
  findAllMessages,
};
