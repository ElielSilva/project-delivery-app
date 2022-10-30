const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

module.exports = ({ id, email }) => {
  const token = jwt.sign(
    { id, email }, 
    process.env.JWT_SECRET || "minhaSenhaSuperSecreta",
    jwtConfig);
  return token;
};
