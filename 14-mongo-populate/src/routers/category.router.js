import { Router } from 'express';
import Category from '../models/Category.js';

const categoryRouter = Router();

categoryRouter.post('/', async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name?.trim()) {
      return res.status(400).json({ ok: false, message: 'name is required' });
    }
    const doc = await Category.create({ name: name.trim() });
    res.status(201).json(doc);
  } catch (err) {
    next(err);
  }
});

export default categoryRouter;
