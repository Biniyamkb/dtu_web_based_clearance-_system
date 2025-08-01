const addUserService = require("../services/addUser.service");
// creae the add user controller

async function createUser(req, res, next) {
  //check if employee email alreday exist in the database
  const userExists = await userService.checkIfUserExists(req.body.user_email);
  //if employee exist , send a response to the client
  if (userExists) {
    res.status(400).json({
      error: "the email address is already associated with anaoter user",
    });
  }else{
    try {
        
    } catch (error) {

        console.log(err)
        res.status(400).json
    }


  }



}
