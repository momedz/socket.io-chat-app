const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const websocket = require('./app/websocket/socket.io');
const client = require('./app/routes');

app.use(client);

http.listen(3000, () => {
   io.on('connection', websocket(io))
   console.log('listening on port 3000');
});