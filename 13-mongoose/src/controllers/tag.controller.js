import Tag from '../db/models/Tag.js';
import Article from '../db/models/Article.js';

export const createTag = async (req, res, next) => {
  try {
    const { name, articles = [] } = req.body;
    if (!name)
      return res.status(400).json({ ok: false, message: 'name is required' });

    const exists = await Tag.findOne({ name });
    if (exists)
      return res.status(409).json({ ok: false, message: 'Tag already exists' });

    const tag = await Tag.create({ name, articles });

    if (articles.length) {
      await Article.updateMany(
        { _id: { $in: articles } },
        { $addToSet: { tags: tag._id } }
      );
    }
    res.status(201).json({ ok: true, data: tag });
  } catch (err) {
    next(err);
  }
};

export const listTags = async (_req, res, next) => {
  try {
    const list = await Tag.find().sort({ createdAt: -1 });
    res.json({ ok: true, data: list });
  } catch (err) {
    next(err);
  }
};

export const getTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tag = await Tag.findById(id).populate('articles');
    if (!tag)
      return res.status(404).json({ ok: false, message: 'Tag not found' });
    res.json({ ok: true, data: tag });
  } catch (err) {
    next(err);
  }
};

export const addArticlesToTag = async (req, res, next) => {
  try {
    const { id } = req.params; 
    const { articles = [] } = req.body;
    const tag = await Tag.findByIdAndUpdate(
      id,
      { $addToSet: { articles: { $each: articles } } },
      { new: true }
    );
    if (!tag)
      return res.status(404).json({ ok: false, message: 'Tag not found' });

    await Article.updateMany(
      { _id: { $in: articles } },
      { $addToSet: { tags: tag._id } }
    );

    res.json({ ok: true, data: tag });
  } catch (err) {
    next(err);
  }
};

export const removeTag = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tag = await Tag.findByIdAndDelete(id);
    if (!tag)
      return res.status(404).json({ ok: false, message: 'Tag not found' });

    await Article.updateMany({ tags: tag._id }, { $pull: { tags: tag._id } });

    res.json({ ok: true, message: 'Deleted', data: tag });
  } catch (err) {
    next(err);
  }
};
