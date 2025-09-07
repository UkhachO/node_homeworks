import Book from '../models/book.js';

export async function list(req, res, next) {
  try {
    const books = await Book.findAll({ order: [['id', 'ASC']] });
    res.json(books);
  } catch (err) {
    next(err);
  }
}

export async function create(req, res, next) {
  try {
    const { title, author, year } = req.body;
    if (!title || !author || typeof year !== 'number') {
      return res
        .status(400)
        .json({ error: 'title, author, year (number) are required' });
    }
    const created = await Book.create({ title, author, year });
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

export async function update(req, res, next) {
  try {
    const { id } = req.params;
    const { title, author, year } = req.body;

    const [count] = await Book.update(
      { title, author, year },
      { where: { id } }
    );
    if (count === 0) return res.status(404).json({ error: 'Book not found' });

    const updated = await Book.findByPk(id);
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const { id } = req.params;
    const count = await Book.destroy({ where: { id } });
    if (count === 0) return res.status(404).json({ error: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    next(err);
  }
}
