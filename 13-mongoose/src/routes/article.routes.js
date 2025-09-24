import { Router } from 'express';
import {
  createArticle,
  listArticles,
  getArticle,
  addTagsToArticle,
  removeArticle,
} from '../controllers/article.controller.js';

const router = Router();

router.get('/', listArticles);
router.post('/', createArticle);
router.get('/:id', getArticle);
router.patch('/:id/tags', addTagsToArticle);
router.delete('/:id', removeArticle);

export default router;
