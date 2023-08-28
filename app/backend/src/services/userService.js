const { User } = require('../database/models');

const createUser = async (username, password) => {
  const newUser = await User.create({ username, password });

  return newUser;
};

module.exports = {
  createUser,
};
