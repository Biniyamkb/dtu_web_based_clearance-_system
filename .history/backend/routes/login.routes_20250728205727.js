//import the express module 

const express = require("express");
//call teh router method from express to create the router 
const router=express.Router();

//import the login controller
const loginController=require("../controllers")