import express from 'express';
import { createServer } from 'http';
import cors from 'cors';
import { Server, Socket } from 'socket.io';

interface Room {
  name: string;
  users: string[];
}

const app = express();
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["Access-Control-Allow-Headersy-custom-header"],
        credentials: true,
    },
});

//app.use(cors()); // enable cross-origin resource sharing

//const server = http.createServer(app);
/*const io = new Server(server, {
  cors: {
    origin: 'localhost', // only allows requests from localhost
  },
});*/

const rooms: Room[] = [];

io.on('connection', (socket) => {
  console.log(`Client ${socket.id} connected`);

  // Send the list of rooms to the newly connected client
  socket.emit('rooms', rooms);

  socket.on('createRoom', () => {
    const roomName = `Room ${rooms.length + 1}`;
    const newRoom: Room = {
      name: roomName,
      users: [],
    };
    rooms.push(newRoom);
    io.emit('rooms', rooms); // Broadcast the updated list of rooms to all clients
  });

  socket.on('joinRoom', (roomName: string) => {
    const room = rooms.find((r) => r.name === roomName);
    if (room) {
      room.users.push(socket.id);
      io.emit('rooms', rooms); // Broadcast the updated list of rooms to all clients
    }
  });

  socket.on('disconnect', () => {
    console.log(`Client ${socket.id} disconnected`);
    // Remove the disconnected client from all rooms
    rooms.forEach((room) => {
      const userIndex = room.users.indexOf(socket.id);
      if (userIndex !== -1) {
        room.users.splice(userIndex, 1);
        io.emit('rooms', rooms); // Broadcast the updated list of rooms to all clients
      }
    });
  });
});

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
