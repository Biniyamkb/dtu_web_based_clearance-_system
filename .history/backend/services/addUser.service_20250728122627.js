//import the query function from the db config
const conn = require("../config/db..config");


// a function to check if employe exists in the database
async function checkIfUserExists(email) {
    const query="SELECT * FROM user WHERE user_email=?";
    const rows=await conn.query(query,[email]);
    if(rows.length>0){
        return true;
    }
    return false

    
}