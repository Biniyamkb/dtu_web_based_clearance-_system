//import express module
const express = require("express");
//call the router method from express to create the router
const router = express.Router();

//import the addUser Controler
const userController = require("../");

//creat a router to handle the add employee request on post
router.post("/api/addUser", userController.createUser);
module.exports = router;
