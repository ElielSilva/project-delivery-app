const { Users } = require('../database/models');

const loginValidate = async (data) => {
  // console.log("userExists.role")
  const errorMessage = { status: 403, message: 'Token not found' };
  const userExists = await Users.findByPk(data.id);
  if (!userExists) throw errorMessage;
  return userExists.role;
};

module.exports = {
  loginValidate,
};