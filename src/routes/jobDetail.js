const { detailJobController } = require("../controllers");
const { jwtValidate } = require("../middlewares");

const router = require("express").Router();

router.get("/job/:id", jwtValidate, detailJobController);

module.exports = router;
