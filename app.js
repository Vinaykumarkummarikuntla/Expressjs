const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action = "/products" method = "POST"><input type= "text" name ="title"> <input type= "text" name ="size"><button type = "submit">Add</button></form>'
  );
  console.log("Starting middleware");
});

app.post("/products", (req, res, next) => {
  console.log("products page loaded");
  console.log(req.body);

  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<html><h1>Welcome to Express.js</h1></html>");
});

app.listen(4000);
