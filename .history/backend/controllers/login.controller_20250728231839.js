const loginService = require("../services/login.service");
const jwt = require("jsonwebtoken");
//import secret key from the enviroment variables
const jwtSecrete = process.env.JWT_SECRET;

//Handle user login
async function logIn(req, res, next) {
  try {
    console.log(req.body);
    const userData = req.body;

    //call the login method from the login service

    const user = await loginService.logIn(userData);
    //if the user iw not found
    if (user.status === "fail") {
      res.status(403).json({
        status: user.status,
        message: user.message,
      });
      console.log(user.message);
    }

   const 


  } catch (error) {}
}

module.exports = {
  logIn,
};
