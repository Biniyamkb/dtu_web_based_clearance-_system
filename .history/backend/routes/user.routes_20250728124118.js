//import express module
const express = require("express");
//call the router method from express to create the router
const router = express.router();

//import the addUser Controler
const userController = require("../controllers/userController");

//creat a router to handle the add employee request on post
router.post("/api/addUser", userControllerserControllers.createUser);
module.exports = router;
