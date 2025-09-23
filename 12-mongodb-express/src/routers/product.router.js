import { Router } from 'express';
import validateBody from '../decorators/validateBody.js';
import {
  productCreateSchema,
  productUpdateSchema,
} from '../schemas/product.schemas.js';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', validateBody(productCreateSchema), createProduct);
router.put('/:id', validateBody(productUpdateSchema), updateProduct);
router.delete('/:id', deleteProduct);

export default router;
