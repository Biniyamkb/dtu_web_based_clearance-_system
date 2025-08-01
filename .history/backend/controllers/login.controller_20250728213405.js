const loginService = require("../services/login.service");
const jwt = require("jsonwebtoken");
//import secret key from the enviroment variables
const jwtSecrete=process.env.JWT_SECRETE
//Handle user login
async function logIn(req, res, next) {
  try {
    console.log(req.body);
    const userData = req.body;

    //call the login method from the login service

    const user = await loginService.logIn(userData);
  } catch (error) {}
}

module.exports = {
  logIn,
};
