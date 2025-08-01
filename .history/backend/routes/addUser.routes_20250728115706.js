//import express module
const express = require("express");
//call the router method from express to create the router
const router = express.router();

//import the addUser Controler
const addUserControllers = require("../controller/addUserControllers");

//creat a router to handle the add employee request on post 
router.post("/api/addUser",addUserController.createUser)
module.exports = router;
