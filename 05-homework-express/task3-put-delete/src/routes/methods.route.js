import { Router } from 'express';

const router = Router();

router.put('/', (req, res) => {
  res.status(200).type('text/plain').send('PUT-запрос обработан');
});

router.delete('/', (req, res) => {
  res.status(200).type('text/plain').send('DELETE-запрос обработан');
});

router.all('/', (req, res) => {
  res.status(405).type('text/plain').send('Method Not Allowed');
});

export default router;
