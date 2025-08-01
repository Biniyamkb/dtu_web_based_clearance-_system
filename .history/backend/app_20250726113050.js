
const express = require('express');
require('dotenv').config();
const app = express();
const port


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});