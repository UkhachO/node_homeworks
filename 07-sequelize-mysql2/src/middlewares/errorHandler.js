import { ValidationError, UniqueConstraintError } from 'sequelize';

export const errorHandler = (err, _req, res, _next) => {
  if (err instanceof ValidationError) {
    return res.status(400).json({ message: err.message });
  }
  if (err instanceof UniqueConstraintError) {
    return res.status(409).json({ message: err.message });
  }
  const status = err.status || 500;
  res.status(status).json({ message: err.message || 'Server error' });
};
