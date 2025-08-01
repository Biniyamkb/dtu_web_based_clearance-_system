const express = require("express");
const router = express.Router();
//import install router
const installRouter = require("./install.routes");
//import the addUser rotes
const userRouter = require("./user.routes");

//import the login routes
const loginRoutes = require("./login.routes");
//add the install router to the main router
router.use(installRouter);
router.use(userRouter);

//addthe login routs to the main router
router.use(loginRoutes);
module.exports = router;
