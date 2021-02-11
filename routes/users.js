const { Router } = require("express");
const controllers = require("../controllers/users");

const router = Router();
console.log("******** ** ** * * ** al;ksdjfasfd*****");
router.post("/up", controllers.signUp);
router.post("/signin", controllers.signIn);
router.get("/verify", controllers.verify);
router.post("/change-password", controllers.changePassword);

module.exports = router;
