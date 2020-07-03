//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose")
 
const app = express();
 
const port = process.env.PORT || 3000;
 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
 
app.get('/', (req, res) => {
  res.render('home');
});

mongoose.connect("mongodb://localhost:27017/userDB", {userNewUrlParser: true})
 
app.get('/login', (req, res) => {
  res.render('login');
});
 
app.get('/register', (req, res) => {
  res.render('register');
});
 
app.listen(port, () => console.log(`Server started at port: ${port}`)
);