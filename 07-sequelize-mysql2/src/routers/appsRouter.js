import { Router } from 'express';
import { getAllApps, addApp } from '../controllers/appsController.js';
import { validateBody } from '../decorators/validateBody.js';
import { appAddSchema } from '../schemas/app.schemas.js';

const router = Router();

router.get('/', getAllApps);
router.post('/', validateBody(appAddSchema), addApp);

export default router;
