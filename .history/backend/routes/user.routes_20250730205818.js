//import express module
const express = require("express");
//call the router method from express to create the router
const router = express.Router();

//import the addUser Controler
const userController = require("../controllers/user.controller");

//creat a router to handle the add user request on post
router.post("/api/addUser", userController.createUser);
module.exports = router;
