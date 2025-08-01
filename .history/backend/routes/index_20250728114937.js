const express = require("express");
const router = express.Router();
//instal
const installRouter = require("./install.routes");
//add the install router to the main router
router.use(installRouter);

module.exports = router;
