const httpErrorMiddleware = (error, req, res, _next) => {
  const { status, message } = error;
  console.log({ status, message });
  res.status(status || 500).json({ message });
};

module.exports = httpErrorMiddleware;