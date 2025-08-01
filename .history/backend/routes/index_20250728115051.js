const express = require("express");
const router = express.Router();
//import install router 
const installRouter = require("./install.routes");
//import the addUser rotes
const addUserRouter
//add the install router to the main router
router.use(installRouter);

module.exports = router;
