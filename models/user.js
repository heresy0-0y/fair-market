const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    posts: [{ type: Schema.Types.ObjectId, ref: "posts" }],
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
