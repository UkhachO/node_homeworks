import fs from 'node:fs/promises';
import path from 'node:path';

const myFolderPath = path.resolve('src', 'myFolder');

const createDirMyFolder = async (dirPath) => {
  try {
    await fs.mkdir(dirPath);
    console.log('Каталог создан', myFolderPath);
  } catch (error) {
    if (error.code === 'EEXIST') {
      return false;
    }
    throw error;
  }
};

createDirMyFolder(myFolderPath);

const deleteDirMyFolder = async (dirPath) => {
  try {
    await fs.rmdir(dirPath);
    console.log('Каталог удален', myFolderPath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    }
    if (error.code === 'EBUSY') {
      return false;
    }
    if (error.code === 'ENOTEMPTY') {
      console.error('В каталоге есть файлы, невозможно удалить', myFolderPath);
    }
    throw error;
  }
};

deleteDirMyFolder(myFolderPath);
