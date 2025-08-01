const conn = require("../config/db..config");
//import the bcrypt module to do the password comparison
const bcrypt = require("bcrypt");
const userService = require("./user.service");

async function logIn(userData) {
  try {
    console.log(userData);
    console.log("this is form login service ");
    let returnData = {}; //object to be returned
    const user = await userService.getUserByEmail(userData.email);
    console.log(user)
    if (user.length === 0) {
      returnData = {
        status: "fail",
        message: "user does not exist",
      };
      return returnData;
    }

    const passwordMatch = await bcrypt.compare(
      userData.password,
      user.password
    );

    if (!passwordMatch) {
      returnData = {
        status: "fail",
        message: "Incorrect password",
      };

      return returnData;
    }

    returnData = {
      status: "success",
      data: user,
    };
    console.log(returnData);
    console.log("succesuful ready to login backend");
    return returnData;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  logIn,
};
