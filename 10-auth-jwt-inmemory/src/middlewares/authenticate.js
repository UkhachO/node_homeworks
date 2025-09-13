import jwt from 'jsonwebtoken';
import HttpError from '../utils/HttpError.js';
import { users } from '../store/users.js';

const JWT_SECRET = process.env.JWT_SECRET;

const authenticate = (req, res, next) => {
  try {
    const auth = req.headers.authorization || '';
    const [, token] = auth.split(' ');
    if (!token) throw HttpError(401, 'No token provided');

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = users.find((u) => u.id === decoded.id);
    if (!user) throw HttpError(401, 'User not found');

    req.user = { id: user.id, role: user.role };
    next();
  } catch {
    next(HttpError(401, 'Invalid or expired token'));
  }
};

export default authenticate;
