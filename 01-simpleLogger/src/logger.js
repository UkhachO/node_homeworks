import fs from 'node:fs/promises';
import path from 'node:path';

const logPath = path.resolve('src', 'text-files', 'log.txt');

function logMessage(message) {
  const log = `${new Date().toLocaleString('uk-UA')} - ${message}\n`;

  fs.appendFile(logPath, log)
    .then(() => console.log(log.trim()))
    .catch((err) => console.error('Ошибка записи', err));
}

export default logMessage;
