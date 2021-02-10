const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const routes = require("./routes");
const db = require("./db/connection");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/api", routes);

db.on(
  "error",
  console.error.bind(console, "MongoBleepBleep concoction inedible")
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
