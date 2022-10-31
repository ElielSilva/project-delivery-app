const { Users } = require('../database/models');
const encriptPassword = require('../helpers/encriptPassword');
const generateToken = require('../helpers/generateToken')

const login = async (email, password) => {
  const user = await Users.findOne({ where: { email } });
  if (!user) throw { status: 404, message: 'Not found' }
  
  const passwordHash = encriptPassword(password)
  if(passwordHash != user.password) throw { status: 404, message: 'Not found' }

  const token = generateToken({ id: user.id, email: user.email }) 

  return token;
};

module.exports = {
  login,
};