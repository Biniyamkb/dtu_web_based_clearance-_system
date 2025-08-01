const express = require("express");
require("dotenv").config();

const port = process.env.PORT;

//import the router
const router = require("./routes");

const app = express();



//add the routes to the application as middlewre
app.use(router);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
