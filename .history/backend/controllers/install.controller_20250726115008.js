//import the the install service to hanle comunication with the database
const installService = require("../services/install.service");

//create a function to handle the install request

async function install(req, res, next) {
  const installMessage = await installService.install();
  
  if(installMessage.status===200){
    res.status(200).json ({
        message: installMessage

    }); }else{
        //if unsuccessful ,send a response to the client 
        res.status(500).json({
            message:installMessage.message,
        })
    }
}
