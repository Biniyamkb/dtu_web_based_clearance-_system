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
    if (user.length === 0) {
      returnData = {
        status: "fail",
        message: "Employee does not exist",
      };
      return returnData;
    }

    const passwordMatch = await bcrypt.compare(
      userData.password,
      user.password
    );
    console.log(passwordMatch);
    console.log("passwordMatch fro login service");
    if (!passwordMatch) {
      returnData = {
        status: "fail",
        message: "Incorrect password",
      };

      return returnData;
    }

    returnData = {
      status: "success",
      data: user[0],
    };
    console.log("")
    return returnData;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  logIn,
};
