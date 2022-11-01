require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

module.exports = (body) => {
  const token = jwt.sign(
    body,
    process.env.JWT_SECRET || 'secret_key',
    jwtConfig,
  );
  return token;
};
