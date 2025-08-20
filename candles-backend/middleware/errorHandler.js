const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  // Log the full error
  logger.error(`${err.message} - ${req.method} ${req.originalUrl} - ${req.ip}`);
  
  // Respond to client
  res.status(err.statusCode || 500).json({
    error: err.message || 'Internal Server Error',
  });
};

module.exports = errorHandler;
