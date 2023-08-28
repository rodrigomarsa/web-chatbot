const express = require('express');
const { createMessage, findAllMessages } = require('../controllers/messageController');

const messageRouter = express.Router();

messageRouter.post('/', createMessage);
messageRouter.get('/', findAllMessages);

module.exports = messageRouter;