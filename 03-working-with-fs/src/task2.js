import fs from 'node:fs/promises';
import path from 'node:path';

const infoFilePath = path.resolve('src', 'info.txt');

const InfoFileFn = async () => {
  try {
    await fs.writeFile(infoFilePath, 'Node.js is awesome!\n');
    console.log('Файл создан и записан', infoFilePath);

    const readInfoFile = await fs.readFile(infoFilePath, 'utf-8');
    console.log(`Содержимое файла: ${readInfoFile}`);
  } catch (error) {
    if (error.code === 'EEXIST') {
      return false;
    }
    throw error;
  }
};

InfoFileFn(infoFilePath);
