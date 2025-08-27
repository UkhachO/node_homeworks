import fs from 'node:fs/promises';
import path from 'node:path';

const logPath = path.resolve('src', 'errors.log');

export async function logToFile(line) {
  try {
    await fs.appendFile(logPath, line);
  } catch (err) {
    console.error('[logToFile] append failed:', err);
  }
}
