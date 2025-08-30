import { Router } from 'express';
import * as ctrl from '../controllers/products.controller.js';
import validate from '../middlewares/validate.js';
import {
  createProductSchema,
  updateProductSchema,
} from '../validators/product.schema.js';

const router = Router();

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);
router.post('/', validate(createProductSchema), ctrl.createOne);
router.patch('/:id', validate(updateProductSchema), ctrl.updateOne);
router.delete('/:id', ctrl.removeOne);

export default router;
