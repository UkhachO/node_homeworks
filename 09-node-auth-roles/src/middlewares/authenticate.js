import jwt from 'jsonwebtoken';
import HttpError from '../utils/HttpError.js';
import User from '../models/User.js';

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies?.token;
    if (!token) throw HttpError(401, 'Unauthorized');

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) throw HttpError(401, 'User not found');

    req.user = user;
    next();
  } catch (err) {
    next(HttpError(401, 'Unauthorized'));
  }
};

export default authenticate;
