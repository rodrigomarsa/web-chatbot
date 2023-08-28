const { UserService } = require('../services');

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await UserService.createUser(username, password);

    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  createUser,
};
