const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

module.exports = (body) => {
  const token = jwt.sign(
    body,
    process.env.JWT_SECRET || 'minhaSenhaSuperSecreta',
    jwtConfig,
  );
  return token;
};
