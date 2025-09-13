import { Router } from 'express';
import authenticate from '../middlewares/authenticate.js';
import checkRole from '../decorators/checkRole.js';

import {
  loginController,
  updateEmailController,
  deleteAccountController,
  updateRoleController,
  refreshTokenController,
} from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/login', loginController);
authRouter.put('/update-email', authenticate, updateEmailController);
authRouter.delete('/delete-account', authenticate, deleteAccountController);
authRouter.put(
  '/update-role',
  authenticate,
  checkRole('admin'),
  updateRoleController
);
authRouter.post('/refresh-token', authenticate, refreshTokenController);

export default authRouter;
