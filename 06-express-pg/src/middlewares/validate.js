import HttpError from '../utils/HttpError.js';

const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
    convert: true,
  });
  if (error) {
    return next(HttpError(400, error.details.map((d) => d.message).join('; ')));
  }
  req.body = value;
  next();
};

export default validate;
