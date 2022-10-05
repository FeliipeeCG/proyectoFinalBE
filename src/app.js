const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");

app.set("port", process.env.PORT || 8080);
app.set("json spaces", 2);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "../public")));

const indexRoute = require("./routes/indexRoutes");
app.use("/api", indexRoute);
app.use((req, res) => {
  res.status(404).json({ Message: "Error 404 - Page not found" });
});

module.exports = app;
