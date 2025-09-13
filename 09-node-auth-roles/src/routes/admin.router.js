import { Router } from 'express';
import authenticate from '../middlewares/authenticate.js';
import checkRole from '../middlewares/checkRole.js';

const router = Router();

router.get('/', authenticate, checkRole('admin'), (req, res) => {
  res.json({ message: 'Welcome, admin!' });
});

export default router;
