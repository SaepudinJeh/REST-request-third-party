const { loginController } = require("../controllers");

const router = require("express").Router();

router.post("/login", loginController);

module.exports = router;
