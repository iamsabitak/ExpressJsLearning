// www. thapa. com
// - welcome to my home page fabout
// - welcome to my about page
// - welcome to my contact page
// - welcome to my temp page

const express = require("express");
const app = express();
const port = 2000;

app.get("/", (req, res) => {
  res.write("<h1>Welcome to the home page</h1>");
  res.write("<h1>Welcome to my home 2 page</h1>");
  res.send();
});

app.get("/about", (req, res) => {
  res.status(200).send("Welcome to my about page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to my contact page");
});

// app.get("/temp", (req, res) => {
//   res.send([
//     {
//       id: 1,
//       name: "sabita",
//       age: 19,
//     },
//     {
//       id: 2,
//       name: "nilam",
//       age: 17,
//     },
//     {
//       id: 3,
//       name: "nabraj",
//       age: 26,
//     },
//     {
//       id: 4,
//       name: "nimisha",
//       age: 24,
//     },
//     {
//       id: 5,
//       name: "sujit",
//       age: 26,
//     },
//   ]);
// });
// The methods are identical when an object or ray is passed, but res. json() will also convert non-objects, such as nult and undefined, which are not valid JSON.
app.get("/temp", (req, res) => {
  res.json([
    {
      id: 1,
      name: "sabita",
      age: 19,
    },
    {
      id: 2,
      name: "nilam",
      age: 17,
    },
    {
      id: 3,
      name: "nabraj",
      age: 26,
    },
    {
      id: 4,
      name: "nimisha",
      age: 24,
    },
    {
      id: 5,
      name: "sujit",
      age: 26,
    },
  ]);
});
app.listen(port, () => {
  console.log(`Listening to the port no ${port}`);
});
