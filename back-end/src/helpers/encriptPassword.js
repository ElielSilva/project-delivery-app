const crypto = require('crypto');

module.exports = (password) => {
  const hash = crypto.createHash('md5').update(password).digest('hex');
  return hash;
};