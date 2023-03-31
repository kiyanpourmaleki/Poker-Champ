import express from 'express';
import cors from 'cors';
import WebSocket from 'ws';

const app = express();
const server = app.listen(8080, () => {
  console.log('Server started on port 8080!');
});

app.use(cors({
  origin: 'http://localhost:3000'
}));

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
  console.log('Client connected!');

  ws.on('message', (message: string) => {
    console.log(`Received message from client: ${message}`);

    // Send a response message back to the client
    ws.send(`Received message: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected.');
  });
});

export {}