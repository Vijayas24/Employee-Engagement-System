const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Serve index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Example WebSocket connection for real-time updates
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle custom events like status change
  socket.on('statusChange', (data) => {
    console.log('Status changed: ', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
http.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
