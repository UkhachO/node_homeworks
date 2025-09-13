import HttpError from '../utils/HttpError.js';

const mustChangePassword = (req, res, next) => {
  if (req.user.mustChangePassword) {
    throw HttpError(403, 'You must change your password');
  }
  next();
};

export default mustChangePassword;
