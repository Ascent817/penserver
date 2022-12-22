const fs = require('fs');
const https = require('https');

const express = require('express');
const app = express();

const options = {
  key: fs.readFileSync('./file.pem'),
  cert: fs.readFileSync('./file.crt'),
  cors: {
    origin: "https://master--dainty-dusk-3f3151.netlify.app"
  }
};

var serverPort = 3000;

var server = https.createServer(options, app);
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