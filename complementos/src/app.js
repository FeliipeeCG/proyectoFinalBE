const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const indexRoute = require("./routes/indexRoutes");
app.set("port", 8080);
app.set("json spaces", 2);
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "../public")));
app.use("/", indexRoute);
const { engine } = require("express-handlebars");
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: path.join(__dirname, "/views/layout/main.hbs"),
    layoutsDir: path.join(__dirname, "./views/layout"),
    partialsDir: path.join(__dirname, "/views/partials"),
  })
);
module.exports = app;
