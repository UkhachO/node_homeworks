import Publisher from '../db/models/Publisher.js';

export const createPublisher = async (req, res, next) => {
  try {
    const { name, location } = req.body;
    if (!name || !location) {
      return res
        .status(400)
        .json({ ok: false, message: 'name and location are required' });
    }
    const doc = await Publisher.create({ name, location });
    res.status(201).json({ ok: true, data: doc });
  } catch (err) {
    next(err);
  }
};

export const listPublishers = async (_req, res, next) => {
  try {
    const list = await Publisher.find().sort({ createdAt: -1 });
    res.json({ ok: true, data: list });
  } catch (err) {
    next(err);
  }
};

export const getPublisher = async (req, res, next) => {
  try {
    const { id } = req.params;
    const doc = await Publisher.findById(id).populate('magazines');
    if (!doc)
      return res
        .status(404)
        .json({ ok: false, message: 'Publisher not found' });
    res.json({ ok: true, data: doc });
  } catch (err) {
    next(err);
  }
};

export const removePublisher = async (req, res, next) => {
  try {
    const { id } = req.params;
    const doc = await Publisher.findByIdAndDelete(id);
    if (!doc)
      return res
        .status(404)
        .json({ ok: false, message: 'Publisher not found' });
    res.json({ ok: true, message: 'Deleted', data: doc });
  } catch (err) {
    next(err);
  }
};
