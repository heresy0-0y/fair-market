const { Router } = require("express");
const postsRouter = require("./posts");
const usersRouter = require("./users");

const router = Router();

router.get("/", (req, res) => res.send("groobt num num num"));

router.use("/users", usersRouter);
router.use("/storefront/posts", postsRouter);

module.exports = router;
