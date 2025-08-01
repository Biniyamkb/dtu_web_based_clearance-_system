const conn = require("../config/db..config");

// import bcrypt moduel
const bcrypt = require("bcrypt");
// a function to check if employe exists in the database
async function checkIfUserExists(email) {
  console.log(email);
  console.log("this is email to check ");
  const query = "SELECT * FROM users WHERE email=?";
  const rows = await conn.query(query, [email]);
  console.log(rows);
  if (rows.length > 0) {
    return true;
  }
  return false;
}

// // function to create a new user
// async function createUser(user) {
//   let createdUser = {};
//   try {
//     // generate a salt and has teh password
//     const salt = await bcrypt.genSalt(10);
//     //hash the passowrd
//     const hashedPassword = await bcrypt.hash(user.user_password, salt);

//     //insert the email in to the users tabel
//     const query = "INSERT INTO users (email,phone_number) VALUES (?,?)";
//     const rows = await conn.query(query, [user.email, user.phone_nuber]);
//     console.log(rows);
//     if (rows.affectedRows !== 1) {
//       return false;
//     }
//     const user_id = rows.insertId;
//     createUser = {
//       user_id: user_id,
//       // email: user.user_email,
//       // user_phone: user.user_phone,
//     };
//   } catch (error) {
//     console.log(err);
//   }
//   return createUser;
// }
async function createUser(user) {
  console.log(user);
  console.log("this is users to create user function ");
  let createdUser = {};
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt); // Use 'password' field

    // Insert into the users table
    const query =
      "INSERT INTO users (email, phone_number, password, role) VALUES (?, ?, ?, ?)";
    const rows = await conn.query(query, [
      user.email,
      user.phone_number,
      hashedPassword,
      user.role,
    ]);

    if (rows.affectedRows !== 1) {
      return false;
    }
    const user_id = rows.insertId;
    createdUser = {
      user_id,
      email: user.email,
      phone_number: user.phone_number,
      role: user.role,
    };
  } catch (error) {
    console.log(error);
  }
  return createdUser;
}

module.exports = {
  checkIfUserExists,
  createUser,
};
