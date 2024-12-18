// API
// get  --- read
// post --- create
// put  --- update
// delete --- delete

// The callback function has 2 parameters, request(req) and response(res).
// The request object(reg) represents the HTTP request and has properties for the request query string, parameters, body,HTTP headers, etc.

// Similarly, the response object represents the HTTP response
// that the Express app sends when it receives an HTTP request.
//nodemon filename.js to run in in the browser
const path = require("path");
const express = require("express");

const app = express();
// relative absolute
// console.log dirname);
// console.log(path.join(__dirname, "../public"));

const staticPath = path.join(__dirname, "../public");

// builtin middleware
app.use(express.static(staticPath));
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/about", (req, res) => {
  res.send("Hello this is About page");
});
app.get("/contact", (req, res) => {
  res.send("Hello this is Contact page");
});

app.listen(8000, () => {
  console.log("Listening the port at 8000");
});
