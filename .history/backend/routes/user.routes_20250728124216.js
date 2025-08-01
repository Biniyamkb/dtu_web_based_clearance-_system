//import express module
const express = require("express");
//call the router method from express to create the router
const router = express.router();

//import the addUser Controler
const userController = require("../controllers/usercontroller");

//creat a router to handle the add employee request on post
router.post("/api/addUser", usercontroller.createUser);
module.exports = router;
