export function authMiddleware(req, res, next) {
  const auth = req.get('authorization');

  if (!auth) {
    return res.status(401).type('text/plain').send('Unauthorized');
  }

  req.token = auth;
  next();
}
