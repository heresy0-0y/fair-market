const { Router } = require("express");
const controllers = require("../controllers/posts");
const restrict = require("../helpers/restrict");

const router = Router();

router.get("/", controllers.getPosts);
router.get("/:id", controllers.getPost);
router.post("/", restrict, controllers.createPost);
router.put("/:id", restrict, controllers.updatePost);
router.delete("/:id", restrict, controllers.deletePost);

module.exports = router;
