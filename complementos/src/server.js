const app = require("./app");
const server = app.listen(app.get("port"), () => {
  console.log(`Servidor express iniciado en puerto ${app.get("port")}`);
});
server.on("error", (error) => {
  console.log(`Error !!!: ${error}`);
});
const SocketIO = require("socket.io");
const io = SocketIO(server);
const Container = require("./models/container");
const contenedor = new Container("products.json");
const Messages = require("./models/Chat");
const messages = new Messages("chat.json");

io.on("connection", async (socket) => {
  console.log(`New Connection: ${socket.id}`);

  const products = await contenedor.getAll();
  socket.emit("product:all", products);

  socket.on("new-product", async (object) => {
    const data = await contenedor.save(object);
    data === null
      ? socket.emit("product:submit", { product: object, status: true })
      : socket.emit("product:submit", { product: object, status: false });
    io.sockets.emit("product:all", products);
  });

  const allMessages = await messages.readMessages();
  socket.emit("chat:history", allMessages);

  socket.on("chat:message", (data) => {
    messages.saveMessage(data);
    io.sockets.emit("chat:history", allMessages);
  });

  socket.on("chat:typing", (data) => {
    socket.broadcast.emit("chat:typing", data);
  });
});
