import { Router } from 'express';
import * as Books from '../controllers/books.controller.js';
import validateId from '../middlewares/validateId.js';

const router = Router();

router.get('/', Books.list); 
router.post('/', Books.create); 
router.put('/:id', validateId, Books.update);
router.delete('/:id', validateId, Books.remove); 

export default router;
