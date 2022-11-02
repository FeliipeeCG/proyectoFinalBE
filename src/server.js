const app = require("./app.js");
const server = app.listen(app.get("port"), () => {
  console.log(`Servidor express iniciado en puerto ${app.get("port")}`);
});
server.on("error", (error) => {
  console.log(`Error !!!: ${error}`);
});
