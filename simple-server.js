const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8765 });

console.log('✅ Simple WebSocket server running on ws://localhost:8765');

wss.on('connection', (ws) => {
  console.log('New client connected!');
  
  ws.on('message', (message) => {
    console.log('Received:', message.toString());
    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
  
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log('Press Ctrl+C to stop');