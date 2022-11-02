require('dotenv').config();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const FILE_SECRET_JWT = "../../jwt.evaluation.key";

const jwtConfig = {
  expiresIn: '5d',
  algorithm: 'HS256',
};

const jwtKey = require("fs")
  .readFileSync("./jwt.evaluation.key", { encoding: "utf-8" });
// async function getSecretJwt() {
//   const jwtKeyGet = await fs.readFileSync(FILE_SECRET_JWT, 'utf-8')
//   // .catch((err) => {
//   //   console.log(err);
//   //   return false;
//   // });
//   return jwtKeyGet;
// }

module.exports = async (body) => {
  // const jwtKey = fs.readFileSync('jwt.evaluation.key.',"utf-8" )
  console.log( jwtKey )
  const token = jwt.sign(
    body,
    jwtKey,
    jwtConfig,
  );
  return token;
};
