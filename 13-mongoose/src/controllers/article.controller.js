import Article from '../db/models/Article.js';
import Tag from '../db/models/Tag.js';

export const createArticle = async (req, res, next) => {
  try {
    const { title, content, tags = [] } = req.body;
    if (!title || !content) {
      return res
        .status(400)
        .json({ ok: false, message: 'title and content are required' });
    }
    const doc = await Article.create({ title, content, tags });

    if (tags.length) {
      await Tag.updateMany(
        { _id: { $in: tags } },
        { $addToSet: { articles: doc._id } }
      );
    }
    res.status(201).json({ ok: true, data: doc });
  } catch (err) {
    next(err);
  }
};

export const listArticles = async (_req, res, next) => {
  try {
    const list = await Article.find().populate('tags').sort({ createdAt: -1 });
    res.json({ ok: true, data: list });
  } catch (err) {
    next(err);
  }
};

export const getArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const doc = await Article.findById(id).populate('tags');
    if (!doc)
      return res.status(404).json({ ok: false, message: 'Article not found' });
    res.json({ ok: true, data: doc });
  } catch (err) {
    next(err);
  }
};

export const addTagsToArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { tags = [] } = req.body;
    const doc = await Article.findByIdAndUpdate(
      id,
      { $addToSet: { tags: { $each: tags } } },
      { new: true }
    );
    if (!doc)
      return res.status(404).json({ ok: false, message: 'Article not found' });

    await Tag.updateMany(
      { _id: { $in: tags } },
      { $addToSet: { articles: doc._id } }
    );
    res.json({ ok: true, data: doc });
  } catch (err) {
    next(err);
  }
};

export const removeArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const doc = await Article.findByIdAndDelete(id);
    if (!doc)
      return res.status(404).json({ ok: false, message: 'Article not found' });

    await Tag.updateMany(
      { articles: doc._id },
      { $pull: { articles: doc._id } }
    );
    res.json({ ok: true, message: 'Deleted', data: doc });
  } catch (err) {
    next(err);
  }
};
