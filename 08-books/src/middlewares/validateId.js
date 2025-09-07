export default function validateId(req, res, next) {
  const { id } = req.params;
  const num = Number(id);
  if (!Number.isInteger(num) || num <= 0) {
    return res.status(400).json({ error: 'Invalid id param' });
  }
  next();
}
