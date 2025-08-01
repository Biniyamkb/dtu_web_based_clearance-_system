//import the the install service to hanle comunication with the database
const installService = require("../services/install.service");

//create a function to handle the install request

async function install(req, res, next) {
  const installMessage = await installService.install();
  
  if(installMessage.status===200){
    res.status(200)
  }
}
