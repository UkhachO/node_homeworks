import Magazine from '../db/models/Magazine.js';

export const createMagazine = async (req, res, next) => {
  try {
    const { title, issueNumber, publisher } = req.body;
    if (!title || !issueNumber || !publisher) {
      return res
        .status(400)
        .json({
          ok: false,
          message: 'title, issueNumber, publisher are required',
        });
    }
    const doc = await Magazine.create({ title, issueNumber, publisher });
    res.status(201).json({ ok: true, data: doc });
  } catch (err) {
    next(err);
  }
};

export const listMagazines = async (_req, res, next) => {
  try {
    const list = await Magazine.find()
      .populate('publisher')
      .sort({ createdAt: -1 });
    res.json({ ok: true, data: list });
  } catch (err) {
    next(err);
  }
};

export const getMagazine = async (req, res, next) => {
  try {
    const { id } = req.params;
    const doc = await Magazine.findById(id).populate('publisher');
    if (!doc)
      return res.status(404).json({ ok: false, message: 'Magazine not found' });
    res.json({ ok: true, data: doc });
  } catch (err) {
    next(err);
  }
};

export const removeMagazine = async (req, res, next) => {
  try {
    const { id } = req.params;
    const doc = await Magazine.findByIdAndDelete(id);
    if (!doc)
      return res.status(404).json({ ok: false, message: 'Magazine not found' });
    res.json({ ok: true, message: 'Deleted', data: doc });
  } catch (err) {
    next(err);
  }
};
