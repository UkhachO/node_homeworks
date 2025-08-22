import fs from 'node:fs/promises';
import dotenv from 'dotenv';
import path from 'node:path';

dotenv.config();

const fileName = process.env.FILENAME;
const filePath = path.resolve('src', fileName);

async function main() {
  try {
    const text = 'Hello from Node.js with dotenv!';
    await fs.writeFile(filePath, text);
    console.log(`Файл "${fileName}" создан и записан`);
    const data = await fs.readFile(filePath, 'utf8');
    console.log(`Содержимое файла ${data}`);
  } catch (error) {
    console.log(error.message);
  }
}

main();
