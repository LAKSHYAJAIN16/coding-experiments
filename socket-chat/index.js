const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let users = 0;
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  users += 1;
  io.emit("joined", JSON.stringify(users));

  socket.on("disconnect", () => {
    users -= 1;
    io.emit("joined", JSON.stringify(users));
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(8000, () => {
  console.log("listening on *:8000");
});
