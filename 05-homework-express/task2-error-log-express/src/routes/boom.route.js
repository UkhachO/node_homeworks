import { Router } from 'express';

const router = Router();

router.all('/', (_req, _res, _next) => {
  throw new Error('Test server error');
});

export default router;
