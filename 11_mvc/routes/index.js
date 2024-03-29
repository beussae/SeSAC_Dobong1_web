const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");

// localhost:8080/
router.get("/", controller.main);

// GET /comments
router.get("/comments", controller.comments);
router.get("/comment/:id", controller.comment);

//한 번에 내보내기
module.exports = router;
