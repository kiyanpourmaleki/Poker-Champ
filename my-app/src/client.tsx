const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
  console.log('Connected to server!');
});

socket.addEventListener('message', (event: MessageEvent) => {
  console.log('Received message from server:', event.data);
});

socket.addEventListener('close', () => {
  console.log('Disconnected from server.');
});

socket.addEventListener('error', (error: Event) => {
  console.error('WebSocket error:', error);
});

export {}