const express = require("express");
const app = express();
const PORT = 5000;

const http = require("http").Server(app);
const cors = require("cors");
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});
app.get("api", (req, res) => {
  res.json({
    message: "Hello",
  });
});

socketIO.on("connection", (socket) => {
  console.log(`${socket.id} user connected`);
  socket.on("message", (data) => {
    console.log("Message", data);
    socketIO.emit(`response/${data.chat_id}`, data);
  });
  socket.on("disconnect", () => {
    console.log(`${socket.id} user disconnected`);
  });
});

http.listen(PORT, () => {
  console.log("Server working");
});
