const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Starting middleware");
  next();
});

app.use((req, res, next) => {
  console.log("Starting 2second middleware");
  res.send("<html><h1>Welcome to Express.js</h1></html>");
});

app.listen(4000);
