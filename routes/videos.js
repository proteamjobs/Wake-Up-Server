var express = require("express");
var router = express.Router();
let controllers = require("../controllers");

/* GET home page. */
router.get("/", controllers.videos.get);
router.post("/:video_id/complete", controllers.videos.complete.post);
// router.get("/me", controllers.auth.me.get);
module.exports = router;
