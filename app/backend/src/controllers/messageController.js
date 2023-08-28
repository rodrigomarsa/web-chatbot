const { MessageService } = require('../services');

const createMessage = async (req, res) => {
  try {
    const { content, userId } = req.body;
    const newMessage = await MessageService.createMessage(content, userId);

    return res.status(201).json(newMessage);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const findAllMessages = async (_req, res) => {
  try {
    const messages = await MessageService.findAllMessages();

    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  createMessage,
  findAllMessages,
};
