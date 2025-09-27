import express from 'express';
import http from 'node:http';
import { Server as SocketIOServer } from 'socket.io';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.static(__dirname));

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'frontend.html'));
});

app.get('/health', (_req, res) => res.json({ ok: true }));

const server = http.createServer(app);
const io = new SocketIOServer(server);

io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  socket.on('client:message', (data) => {
    console.log('Message from client:', data);

    socket.emit('server:ack', {
      status: 'ok',
      text: String(data?.text ?? ''),
      at: new Date().toISOString(),
    });

    io.emit('server:broadcast', {
      user: String(data?.user || 'Anonymous'),
      text: String(data?.text || ''),
      time: new Date().toLocaleTimeString(),
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
