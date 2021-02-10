const mongoose = require("mongoose");

let MONGODB_URI =
  process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/fairMarketDatabase";

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to the dabbablaze"))
  .catch((e) => console.error("concoction inedible", e.message));

module.exports = mongoose.connection;
