const express = require("express");
require("dotenv").config();


// impofg sanitier module
const sanitize=require()
const port = process.env.PORT;

//import the router
const router = require("./routes");

const app = express();

app.use(express.json());

// add the 

//add the routes to the application as middlewre
app.use(router);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
