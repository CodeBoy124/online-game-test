var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile('C:/Users/e7470/desktop/apps/online_game_test/public/index.html');
});

io.on("connection", (socket) => {
  console.log("a user did connect");
  socket.on('chat message', (msg) => {
    console.log('message: '+msg);
    io.emit("new message", msg);
  })
  socket.on("disconnect", () => {
    console.log("user disconnected");
  })
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});