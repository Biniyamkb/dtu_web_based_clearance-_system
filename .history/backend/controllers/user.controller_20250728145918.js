const userService = require("../services/user.service");
// creae the add user controller

async function createUser(req, res, next) {
  console.log(req.body);
  //check if employee email alreday exist in the database
  const userExists = await userService.checkIfUserExists(req.body.user_email);
  //if employee exist , send a response to the client
  if (userExists) {
    res.status(400).json({
      error: "the email address is already associated with anaoter user",
    });
  } else {
    try {
      const userData = req.body;
      const user = await userService.createUser(userData);
      if (!user) {
        res.status(400).json({
          error: "faild to add the employee!",
        });
      } else {
        res.status(200).json({
          status: "true",
        });
      }
    } catch (error) {
      console.log(err);
      res.status(400).json({
        error: "Something  went wrong!",
      });
    }
  }
}

module.exports = {
  createUser,
};
