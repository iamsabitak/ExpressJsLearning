// www. thapa. com
// - welcome to my home page fabout
// - welcome to my about page
// - welcome to my contact page
// - welcome to my temp page

const express = require("express");
const app = express();
const port = 2000;

app.get("/", (req, res) => {
  res.send("Welcom to the home page");
});

app.get("/about", (req, res) => {
  res.send("Welcome to my about page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to my contact page");
});

app.get("/temp", (req, res) => {
  res.status(2000).send("Welcome to my temp page");
});

app.listen(port, () => {
  console.log(`Listening to the port no ${port}`);
});
