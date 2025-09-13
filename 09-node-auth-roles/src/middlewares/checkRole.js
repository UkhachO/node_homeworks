import HttpError from '../utils/HttpError.js';

const checkRole =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw HttpError(403, 'Forbidden');
    }
    next();
  };

export default checkRole;
