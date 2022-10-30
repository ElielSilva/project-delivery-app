const loginService = require('../services/loginService.js');

const loginController = async (req, res) => {
  console.log("userData");
  const { email, password } = req.body;
  if (!email || !password) {
    throw { status:404 , message: 'Not found'}
  }
  const token = await loginService.login(email, password);
  res.status(200).json({ token }); 
};

module.exports = {
  loginController,
};