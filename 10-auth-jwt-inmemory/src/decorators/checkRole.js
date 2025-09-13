import HttpError from '../utils/HttpError.js';

const checkRole = (...roleList) => {
  return (req, res, next) => {
    const role = req.user?.role || 'user';
    if (!roleList.includes(role)) {
      throw HttpError(403, 'Forbidden');
    }
    next();
  };
};

export default checkRole;
