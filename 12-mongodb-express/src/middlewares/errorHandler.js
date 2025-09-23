const errorHandler = (error, _req, res, _next) => {
  const status = error.status || 500;
  const message = error.message || 'Server error';
  res.status(status).json({ message });
};

export default errorHandler;
