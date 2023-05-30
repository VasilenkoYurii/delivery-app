require("dotenv").config();
const fs = require("fs");
const path = require("path");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const restaurantsRouter = require("./routes/api/restaurants");
const ordersRouter = require("./routes/api/orders");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/restaurants", restaurantsRouter);
app.use("/api/orders", ordersRouter);

const staticPath = path.resolve(`${__dirname}/../client/build`);
app.use(express.static(staticPath));

app.get("*", (req, res) => {
  res.write(fs.readFileSync(`${__dirname}/../client/build/index.html`));
  res.end();
});

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;
