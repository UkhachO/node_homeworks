import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import HttpError from '../utils/HttpError.js';
import User from '../models/User.js';

export const registerUser = async ({ fullName, email, password }) => {
  const exists = await User.findOne({ where: { email } });
  if (exists) throw HttpError(409, 'Email already registered');

  const hash = await bcrypt.hash(password, 10);
  return User.create({ fullName, email, password: hash });
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw HttpError(401, 'Invalid credentials');

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw HttpError(401, 'Invalid credentials');

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  );
  return { user, token };
};

export const changePassword = async (id, { currentPassword, newPassword }) => {
  const user = await User.findByPk(id);
  if (!user) throw HttpError(404, 'User not found');

  const match = await bcrypt.compare(currentPassword, user.password);
  if (!match) throw HttpError(401, 'Invalid password');

  const hash = await bcrypt.hash(newPassword, 10);
  await user.update({ password: hash, mustChangePassword: false });
};

export const deleteAccount = async (id, password) => {
  const user = await User.findByPk(id);
  if (!user) throw HttpError(404, 'User not found');

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw HttpError(401, 'Invalid password');

  await user.destroy();
};

export const changeEmail = async (id, { currentPassword, newEmail }) => {
  const user = await User.findByPk(id);
  if (!user) throw HttpError(404, 'User not found');

  const match = await bcrypt.compare(currentPassword, user.password);
  if (!match) throw HttpError(401, 'Invalid password');

  const exists = await User.findOne({ where: { email: newEmail } });
  if (exists) throw HttpError(409, 'Email already in use');

  await user.update({ email: newEmail });
};
