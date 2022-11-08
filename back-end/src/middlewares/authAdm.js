require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtKey = require('fs')
  .readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const x = jwt.verify(authorization, jwtKey);
    if (x.role !== 'administrator') {
      return res.status(401).json({ message: 'User not authorized' })
    }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};
