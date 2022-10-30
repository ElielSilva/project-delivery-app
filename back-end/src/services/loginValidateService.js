const { Users } = require('../database/models');


const loginValidate = async (data) => {
  console.log("userExists.role")
  const userExists = await Users.findByPk(data.id);
  if(!userExists) throw { status:  401, message: 'Token not found' };
  console.log(userExists.role)
  return userExists.role;
}

module.exports = {
  loginValidate,
};