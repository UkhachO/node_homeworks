const errorHandler = (err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({
    ok: false,
    message: err.message || 'Internal Server Error',
  });
};

export default errorHandler;
