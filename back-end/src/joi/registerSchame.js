const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().min(3).max(15).required(),
});

// function validateTest(listSales, schema) {
//   const { error } = schema.validate(listSales);
//   if (!error) return false;
//   return error.details[0].message;
// }

// console.log(
//   validateTest(
//     {
//       name: 'eliel body biuld lindo',
//       email: 'trybe@trybe.com',
//       password: '12346567',
//       // man: 'asdasdad',
//     },    
//     registerSchema,
// ),
// );

module.exports = registerSchema;