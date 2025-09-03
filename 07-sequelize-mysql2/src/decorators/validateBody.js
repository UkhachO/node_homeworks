import HttpError from '../utils/HttpError.js';

export const validateBody = (schema) => (req, _res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });
  if (error) return next(HttpError(400, error.message));
  req.body = value;
  next();
};
