const loginService = require("../services/login.service");

//Handle user login
async function logIn(req, res, next) {
  try {
    console.log(req.body);
    const userData=req.body;

    //call the login method from the login service
  } catch (error) {}
}

module.exports = {
  logIn,
};
