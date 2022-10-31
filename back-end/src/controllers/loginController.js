const loginService = require('../services/loginService');

const errorMessage = { status: 404, message: 'Not found' };

const loginController = async (req, res) => {
  // console.log("userData");
  const { email, password } = req.body;
  if (!email || !password) throw errorMessage;
  const token = await loginService.login(email, password);
  res.status(200).json({ token }); 
};

module.exports = {
  loginController,
};