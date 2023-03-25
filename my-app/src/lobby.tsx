import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Lobby: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const socket = io('http://localhost:8080');

    // Handle incoming messages from the server
    socket.on('message', (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the WebSocket connection when the component is unmounted
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    // Send a message to the server
    const socket = io('http://localhost:8080');
    socket.send(message);

    // Clear the input field
    setMessage('');
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default Lobby;
