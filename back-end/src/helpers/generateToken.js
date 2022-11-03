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


module.exports = async (body) => {
  const token = jwt.sign(
    body,
    jwtKey,
    jwtConfig,
  );
  return token;
};
