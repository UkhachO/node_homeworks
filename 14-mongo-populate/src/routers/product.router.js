import { Router } from 'express';
import Product from '../models/Product.js';

const productRouter = Router();

productRouter.post('/', async (req, res, next) => {
  try {
    const { name, price, category } = req.body;
    if (!name?.trim() || price == null || !category) {
      return res.status(400).json({
        ok: false,
        message: 'name, price and category are required',
      });
    }
    const doc = await Product.create({ name: name.trim(), price, category });
    res.status(201).json(doc);
  } catch (err) {
    next(err);
  }
});

productRouter.get('/', async (_req, res, next) => {
  try {
    const items = await Product.find().populate('category');
    res.json(items);
  } catch (err) {
    next(err);
  }
});

export default productRouter;
