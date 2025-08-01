const { json } = require("express");
const loginService = require("../services/login.service");
const jwt = require("jsonwebtoken");
//import secret key from the enviroment variables
const jwtSecrete = process.env.JWT_SECRET;

//Handle user login
async function logIn(req, res, next) {
  try {
    console.log(req.body);
    const userData = req.body;
    console.log("this login is from ogin contrjknmnm,oller ");
    //call the login method from the login service

    const user = await loginService.logIn(userData);
    // if the user is not found
    console.log(user);
    console.log("user data form login controller ");
    if (user.status === "fail") {
      
      res.status(403).json({
        status: user.status,
        message: user.message,
      });
      // console.log(user.message);
    }

    const payload = {
      user_id: user.data.user_id,
      email: user.data.email,
      role: user.data.role,
      created_at: user.data.created_at,
      first_name: user.data.first_name,
      father_name: user.data.father_name,
    };

    console.log(payload);
    const token = jwt.sign(payload, jwtSecrete, {
      expiresIn: "24h",
    });
    // console.log(token);
    // console.log("this is our token");

    const sendBack = {
      user_token: token,
    };

    res.status(200).json({
      status: "success",
      message: "user logged in successfully",
      data: sendBack,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
}

module.exports = {
  logIn,
};
