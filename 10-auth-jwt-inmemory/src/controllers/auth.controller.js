import {
  loginUser,
  updateEmail,
  deleteAccount,
  updateRole,
  refreshToken,
} from '../services/auth.service.js';

export const loginController = async (req, res, next) => {
  try {
    const data = await loginUser(req.body);
    res.json(data);
  } catch (e) {
    next(e);
  }
};

export const updateEmailController = async (req, res, next) => {
  try {
    const data = await updateEmail({
      id: req.user.id,
      newEmail: req.body?.newEmail,
    });
    res.json({ message: 'Email updated', user: data });
  } catch (e) {
    next(e);
  }
};

export const deleteAccountController = async (req, res, next) => {
  try {
    await deleteAccount({ id: req.user.id });
    res.json({ message: 'Account deleted' });
  } catch (e) {
    next(e);
  }
};

export const updateRoleController = async (req, res, next) => {
  try {
    const data = await updateRole({
      requesterRole: req.user.role,
      userId: req.body?.userId,
      role: req.body?.role,
    });
    res.json({ message: 'Role updated', user: data });
  } catch (e) {
    next(e);
  }
};

export const refreshTokenController = async (req, res, next) => {
  try {
    const token = await refreshToken({ id: req.user.id });
    res.json({ token });
  } catch (e) {
    next(e);
  }
};
