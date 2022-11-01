const { Users } = require('../database/models');
const encriptPassword = require('../helpers/encriptPassword');
const generateToken = require('../helpers/generateToken');

const errorMessage = { status: 404, message: 'Not found' };

const login = async (email, password) => {
  const user = await Users.findOne({ where: { email } });
  if (!user) throw errorMessage;
  const passwordHash = encriptPassword(password);
  if (passwordHash !== user.password) throw errorMessage;

  const token = generateToken({ id: user.id, name: user.name, email: user.email });

  return token;
};

module.exports = {
  login,
};