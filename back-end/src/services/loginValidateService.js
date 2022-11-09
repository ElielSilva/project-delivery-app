const { Users } = require('../database/models');

const loginValidate = async (data) => {  
  const errorMessage = { status: 403, message: 'Token not found' };
  const userExists = await Users.findByPk(data.id);
  if (!userExists) throw errorMessage;
  return {
    id: userExists.id,
    name: userExists.name, 
    email: userExists.email,
    role: userExists.role,
  };
};

module.exports = {
  loginValidate,
};