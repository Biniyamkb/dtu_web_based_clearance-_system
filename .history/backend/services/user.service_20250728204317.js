const conn = require("../config/db..config");

// import bcrypt moduel
const bcrypt = require("bcrypt");
// a function to check if employe exists in the database
async function checkIfUserExists(email) {
  const query = "SELECT * FROM users WHERE email=?";
  const rows = await conn.query(query, [email]);
  console.log(rows);
  if (rows.length > 0) {
    return true;
  }
  return false;
}

async function createUser(user) {
  let createdUser = {};
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt); // Use 'password' field

    // Insert into the users table
    const query =
      "INSERT INTO users (email, phone_number, password, role,first_name,father_name) VALUES (?, ?, ?, ?,?,?)";
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
