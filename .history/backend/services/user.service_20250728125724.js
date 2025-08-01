//import the query function from the db config
const conn = require("../config/db..config");

// a function to check if employe exists in the database
async function checkIfUserExists(email) {
  const query = "SELECT * FROM user WHERE user_email=?";
  const rows = await conn.query(query, [email]);
  console.log(rows)
  if (rows.length > 0) {
    return true;
  }
  return false;
}

// function to create a new user 
 async function createUser(user) {
  let createdUser={};
  try {
    // generate a salt and has teh password 
    const salt = await bcrypt.genSalt(10);
    //hash the passowrd 
    const hashedPassword=await bcrypt.hash(user.user_password,salt);

    //insert the email in to the users tabel 

    
  } catch (error) {
    
  }
  
 }
