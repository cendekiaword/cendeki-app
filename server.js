const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { Server } = require("socket.io");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  let data;
  let trigger;
  io.on("connection", (socket) => {
    // ...
    socket.emit("hello", "world");
    socket.on("coba", (value) => {
      console.log(value, "di server");
      data = value;
    });
    socket.emit("leader", data);
    socket.on("trigger", (value) => {
      console.log("masuk trigger");
      trigger = value;
    });
    io.emit("send", trigger);
  });

  // io.emit("send", trigger);

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
