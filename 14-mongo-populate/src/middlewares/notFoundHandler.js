const notFoundHandler = (req, res, _next) => {
  res.status(404).json({
    ok: false,
    message: `Route ${req.originalUrl} not found`,
  });
};

export default notFoundHandler;
