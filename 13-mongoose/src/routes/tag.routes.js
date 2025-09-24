import { Router } from 'express';
import {
  createTag,
  listTags,
  getTag,
  addArticlesToTag,
  removeTag,
} from '../controllers/tag.controller.js';

const router = Router();

router.get('/', listTags);
router.post('/', createTag);
router.get('/:id', getTag);
router.patch('/:id/articles', addArticlesToTag);
router.delete('/:id', removeTag);

export default router;
