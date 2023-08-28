const express = require('express');
const messageRouter = require('../routes/messageRouter');
const userRouter = require('../routes/userRouter');

const app = express();

// não remova ou mova esse endpoint
// app.get('/', (_request, response) => {
//   response.send();
// });

app.use(express.json());

app.use('/messages', messageRouter);
app.use('/user', userRouter);

module.exports = app;
