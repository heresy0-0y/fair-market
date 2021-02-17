const db = require("../db/connection");
const User = require("../models/user");
const Post = require("../models/post");

db.on(
  "error",
  console.error.bind(console, "MongoBleebBleeb concoction inedible cus: ")
);

const main = async () => {
  const user1 = new User({
    username: "jeff.e",
    email: "jeffy@gmail.com",
    posts: [],
  });
  await user1.save();
  const user2 = new User({
    username: "cint.ia",
    email: "cintia@gmail.com",
    pasword_digest: ,
    posts: [],
  });
  await user2.save();

  const posts = [
    {
      subject: "i love this show",
      content: "jerry seinfeld should stop hurting the bees",
      userId: user2._id,

    },
    {
      subject: "turtles",
      content: "i think so too",
      userId: user1._id,
    },
  ];
  await Post.insertMany(posts);
  console.log("we made the posths !!");

  user1.posts = await Post.find({ userId: user1 });
  await user1.save();
  user2.posts = await Post.find({ userId: user2 });
  await user2.save();
};

const run = async () => {
  await main();
  db.close();
};

run();
