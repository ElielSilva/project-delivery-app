const httpErrorMiddleware = (error, req, res, _next) => {
  res.status(error.status || 500).json({ massege: error.message });
};

module.exports = httpErrorMiddleware;