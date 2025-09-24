import { Router } from 'express';
import {
  createPublisher,
  listPublishers,
  getPublisher,
  removePublisher,
} from '../controllers/publisher.controller.js';

const router = Router();

router.get('/', listPublishers);
router.post('/', createPublisher);
router.get('/:id', getPublisher);
router.delete('/:id', removePublisher);

export default router;
