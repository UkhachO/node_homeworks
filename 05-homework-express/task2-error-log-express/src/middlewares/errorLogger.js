import { logToFile } from '../utils/logToFile.js';

export async function errorLogger(err, req, res, _next) {
  const line = `${new Date().toISOString()} ${req.method} ${
    req.originalUrl
  } - ${err.name}: ${err.message}\n`;
  await logToFile(line);

  res.status(500).type('text/plain').send('Internal Server Error');
}
