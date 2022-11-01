module.exports = function joiValidate(body, schema) {
  const { error } = schema.validate(body);
  if (!error) return false;
  const errorMessage = { status: 404, message: error.details[0].message };
  throw errorMessage;
};