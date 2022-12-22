const fs = require('fs');
const http = require('http');

const express = require('express');
const app = express();

const options = {
  cors: {
    origin: "https://master--dainty-dusk-3f3151.netlify.app"
  }
};

var serverPort = 3000;

var server = http.createServer(options, app);
var io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/payload.html');
});

io.on('connection', function(socket) {
  console.log('new connection');
});

io.on('post', (input) => {
  console.log(input);
  io.emit("update", input);
});

server.listen(serverPort, "0.0.0.0");