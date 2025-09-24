import { Router } from 'express';
import {
  createMagazine,
  listMagazines,
  getMagazine,
  removeMagazine,
} from '../controllers/magazine.controller.js';

const router = Router();

router.get('/', listMagazines);
router.post('/', createMagazine);
router.get('/:id', getMagazine);
router.delete('/:id', removeMagazine);

export default router;
