const express = require('express');
const cors = require('cors');
const messageRouter = require('../routes/messageRouter');
const userRouter = require('../routes/userRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/messages', messageRouter);
app.use('/user', userRouter);

module.exports = app;
