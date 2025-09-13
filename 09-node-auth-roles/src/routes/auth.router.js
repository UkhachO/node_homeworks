import { Router } from 'express';
import {
  registerUser,
  loginUser,
  changePassword,
  deleteAccount,
  changeEmail,
} from '../services/auth.service.js';
import authenticate from '../middlewares/authenticate.js';

const router = Router();

router.post('/register', async (req, res, next) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({ id: user.id, email: user.email });
  } catch (e) {
    next(e);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { user, token } = await loginUser(req.body);
    res.cookie('token', token, { httpOnly: true });
    res.json({ message: 'Login successful' });
  } catch (e) {
    next(e);
  }
});

router.post('/change-password', authenticate, async (req, res, next) => {
  try {
    await changePassword(req.user.id, req.body);
    res.json({ message: 'Password changed' });
  } catch (e) {
    next(e);
  }
});

router.post('/delete-account', authenticate, async (req, res, next) => {
  try {
    await deleteAccount(req.user.id, req.body.password);
    res.json({ message: 'Account deleted' });
  } catch (e) {
    next(e);
  }
});

router.post('/change-email', authenticate, async (req, res, next) => {
  try {
    await changeEmail(req.user.id, req.body);
    res.json({ message: 'Email changed' });
  } catch (e) {
    next(e);
  }
});

export default router;
