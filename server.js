const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app); 
const { Server } = require("socket.io");
const io = new Server(server);           
const path = require('path');

const PORT = process.env.PORT || 4004;

app.use(express.static(path.join(__dirname, 'public'))); 

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('message', (data) => {
        io.emit('chat-message', data); 
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(PORT, () => { 
    console.log(`Server listening on port ${PORT}`);
});