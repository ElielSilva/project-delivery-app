require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

const jwtKey = require('fs')
  .readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

module.exports = async (body) => {
  const token = jwt.sign(
    body,
    jwtKey,
    jwtConfig,
  );
  return token;
};
