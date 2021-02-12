const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema(
  {
    subject: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("posts", Post);
