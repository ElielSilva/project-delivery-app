const loginValidateService = require('../services/loginValidateService');

const loginValidateController = async (req, res) => {
  const { id } = req;
  const role = await loginValidateService.loginValidate({ id });
  res.status(200).json({ role });
};

module.exports = loginValidateController;
