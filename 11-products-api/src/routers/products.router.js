import { Router } from 'express';
import {
  getAll,
  getById,
  createOne,
} from '../controllers/products.controller.js';
import { createProductSchema } from '../schemas/product.schemas.js';

const router = Router();

router.get('/', getAll);
router.get('/:id', getById);

router.post('/', (req, res, next) => {
  const { error } = createProductSchema.validate(req.body);
  if (error) return next({ status: 400, message: error.message });
  return createOne(req, res, next);
});

export default router;
