import * as service from '../services/products.service.js';
import HttpError from '../utils/HttpError.js';

export const getAll = async (req, res, next) => {
  try {
    const data = await service.list();
    res.json(data);
  } catch (e) {
    next(e);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const item = await service.getById(id);
    if (!item) throw HttpError(404, 'Product not found');
    res.json(item);
  } catch (e) {
    next(e);
  }
};

export const createOne = async (req, res, next) => {
  try {
    const created = await service.create(req.body);
    res.status(201).json({ message: 'Product created', ...created });
  } catch (e) {
    next(e);
  }
};

export const updateOne = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const updated = await service.update(id, req.body);
    if (!updated) throw HttpError(404, 'Product not found');
    res.json({ message: 'Product updated', ...updated });
  } catch (e) {
    next(e);
  }
};

export const removeOne = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const ok = await service.remove(id);
    if (!ok) throw HttpError(404, 'Product not found');
    res.json({ message: 'Product removed' });
  } catch (e) {
    next(e);
  }
};
