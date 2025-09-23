import mongoose from 'mongoose';
import Product from '../models/product.model.js';

export const createProduct = async (req, res, next) => {
  try {
    const doc = await Product.create(req.body);
    res.status(201).json(doc);
  } catch (error) {
    next(error);
  }
};

export const getProducts = async (_req, res, next) => {
  try {
    const list = await Product.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      const err = new Error('Invalid id');
      err.status = 400;
      throw err;
    }

    const doc = await Product.findById(id);
    if (!doc) {
      const err = new Error('Product not found');
      err.status = 404;
      throw err;
    }
    res.json(doc);
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      const err = new Error('Invalid id');
      err.status = 400;
      throw err;
    }

    const doc = await Product.findByIdAndUpdate(id, req.body, { new: true });
    if (!doc) {
      const err = new Error('Product not found');
      err.status = 404;
      throw err;
    }
    res.json(doc);
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      const err = new Error('Invalid id');
      err.status = 400;
      throw err;
    }

    const doc = await Product.findByIdAndDelete(id);
    if (!doc) {
      const err = new Error('Product not found');
      err.status = 404;
      throw err;
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
