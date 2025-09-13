import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import HttpError from '../utils/HttpError.js';
import { users } from '../store/users.js';

const JWT_SECRET = process.env.JWT_SECRET;

export const loginUser = async ({ email, password }) => {
  if (!email || !password) throw HttpError(400, 'email and password required');

  const user = users.find((u) => u.email === email);
  if (!user) throw HttpError(401, 'Invalid credentials');

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw HttpError(401, 'Invalid credentials');

  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: '15m',
  });
  return { token, user: { id: user.id, email: user.email, role: user.role } };
};

export const updateEmail = async ({ id, newEmail }) => {
  if (!newEmail) throw HttpError(400, 'newEmail is required');

  const exists = users.find((u) => u.email === newEmail);
  if (exists) throw HttpError(409, 'Email already in use');

  const user = users.find((u) => u.id === id);
  if (!user) throw HttpError(404, 'User not found');

  user.email = newEmail;
  return { id: user.id, email: user.email, role: user.role };
};

export const deleteAccount = async ({ id }) => {
  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) throw HttpError(404, 'User not found');
  users.splice(idx, 1);
};

export const updateRole = async ({ requesterRole, userId, role }) => {
  if (requesterRole !== 'admin') throw HttpError(403, 'Forbidden');
  if (!userId || !role) throw HttpError(400, 'userId and role are required');
  if (!['user', 'admin'].includes(role)) throw HttpError(400, 'Invalid role');

  const target = users.find((u) => u.id === Number(userId));
  if (!target) throw HttpError(404, 'Target user not found');

  target.role = role;
  return { id: target.id, email: target.email, role: target.role };
};

export const refreshToken = async ({ id }) => {
  const user = users.find((u) => u.id === id);
  if (!user) throw HttpError(401, 'User not found');
  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: '15m',
  });
  return token;
};
