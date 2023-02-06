const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'],
  },
});

io.on('connection', (socket) => {
  console.log(`user connected ${socket.id}`);

  socket.on('join_room', (room) => {
    console.log(room);
    socket.join(room);
  });

  socket.on('send_message', (data) => {
    socket.to(data.room).emit('message_receive', data);
  });

  // socket.on('send_message', (data) => {
  //   console.log(data);
  //   socket.broadcast.emit('message_receive', data);
  // });
});

app.get('/', (_req, res) => {
  res.send({ message: 'Home Page' });
});

server.listen(5000, () => {
  console.log('app is listening on 5000');
});
