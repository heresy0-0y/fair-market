const db = require("../db/connection");
const Post = require("../models/post");

db.on(
  "error",
  console.error.bind(console, "MongoBleebBleeb concoction inedible cus: ")
);

const main = async () => {
  const posts = [
    {
      subject: "i love this show",
      content: "jerry seinfeld should stop hurting the bees",
    },
  ];
  await Post.insertMany(posts);
  console.log("we made the posths !!");
};

const run = async () => {
  await main();
  db.close();
};

run();
