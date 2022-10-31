const registerService = require('../services/registerService');

// const errorMessage = { status: 404, message: 'Not found' };

const registerController = async (req, res) => {
  // const { name, email } = req.body;
  const token = await registerService.create(req.body);
  res.status(201).json(token);
};

module.exports = {
  registerController,
};