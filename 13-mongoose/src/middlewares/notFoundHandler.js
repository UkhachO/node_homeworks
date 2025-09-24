const notFoundHandler = (_req, res, _next) => {
  res.status(404).json({ ok: false, message: 'Route not found' });
};

export default notFoundHandler;
