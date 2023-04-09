import React, {useEffect} from 'react';
//import WebSocket from 'ws';

export default function Test_Client() {
    useEffect(() => {
        const sock = new WebSocket('ws://localhost:8080');

        sock.onopen = () => {
            console.log("Connected to the server");
            sock.send("hello world");
        };

        sock.onmessage = (event: MessageEvent) => {
            console.log(`Received message from server: {event.data}`);
        };

        sock.onclose = () => {
            console.log("Disconnected from server");
        };

        return () => {
            sock.close();
        };
    }, []);

    return (
        <div>
            <h1>Socket Test</h1>
        </div>
    );
}
/*sock.addEventListener('open', () => {
  console.log('Connected to server!');
});

sock.addEventListener('message', (event: MessageEvent) => {
  console.log('Received message from server:', event.data);
});

sock.addEventListener('close', () => {
  console.log('Disconnected from server.');
});

sock.addEventListener('error', (error: Event) => {
  console.error('WebSocket error:', error);
});

// Send a message to the server
sock.send('Hello, server!');

export {}*/