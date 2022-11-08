const md5 = require('md5');
const { Users } = require('../database/models');
// const encriptPassword = require('../helpers/encriptPassword');
const generateToken = require('../helpers/generateToken');
const joiValidate = require('../joi/index');
const registerSchema = require('../joi/registerSchame');

const errorMessage = { status: 409, message: 'conflict' };

const create = async (body) => {
  const { name, password, role, email } = body;
  const passwordHash = md5(password);
  joiValidate(body, registerSchema);
  const userExist = await Users.findAll({ where: { name, email } });
  if (userExist[0]) throw errorMessage; 

  const bodyWithEncript = {
    ...body,
    password: passwordHash,
  };
  const user = await Users.create(bodyWithEncript);
  if (!user) throw errorMessage;
  const token = generateToken({ 
    id: user.id, name, email, role,
  });

  return { 
    name: user.name, email: user.email, role: user.role, token,
  };
};

const createWithAdm = async (body) => {
  const { name, password, email } = body;
  const passwordHash = md5(password);
  joiValidate(body, registerSchema);
  const userExist = await Users.findAll({ where: { name, email } });
  if (userExist[0]) throw errorMessage; 

  const bodyWithEncript = {
    ...body,
    password: passwordHash,
  };
  const user = await Users.create(bodyWithEncript);
  if (!user) throw errorMessage;

  return;
};

module.exports = {
  create,
  createWithAdm,
};