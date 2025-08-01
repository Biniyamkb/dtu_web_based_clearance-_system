const conn = require("../config/db..config");
//import the bcrypt module to do the password comparison
const bcrypt = require("bcrypt");
const userService = require("./user.service");

async function logIn(userData) {
  try {
    let returnData = {}; //object to be returned
    const user = await userService.getUserByEmail(userData.user_email);
    if (user.length === 0) {
      returnData = {
        status: "fail",
        message: "Employee does not exist",
      };
      return returnData;
    }
    const passwordMatch = await bcrypt.compare(
      userData.user_password[0].user_password_hashed
    );
    if (!passwordMatch) {
      returnData = {
        status: "fail",
        message: "Incorrect password",
      };

      


    }
  } catch (error) {}
}
