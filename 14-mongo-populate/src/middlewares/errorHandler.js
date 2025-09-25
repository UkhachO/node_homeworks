const errorHandler = (err, _req, res, _next) => {
  console.log('[error]', err);
  const status = err.status || 500;
  res.status(status).json({
    ok: false,
    message: err.message || 'Server error',
  });
};

export default errorHandler;
