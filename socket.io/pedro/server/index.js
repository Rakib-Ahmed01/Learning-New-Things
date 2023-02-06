const express = require('express');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  },
});

app.use(cors());

io.on('connection', (socket) => {
  console.log(`user connected ${socket.id}`);

  socket.on('join_room', (data) => {
    socket.join(data.room);
  });

  socket.on('send_message', (data) => {
    console.log(data);
    // io.emit('receive_message', data);
    io.to(data.room).emit('receive_message', { message: data.message });
  });
});

app.get('/', (_req, res) => {
  res.json({ message: 'Home Page' });
});

server.listen(5000, console.log('server is listening on port 5000'));
