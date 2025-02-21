const express = require("express");

const PORT = 5000;

const app = express();

app.use(express.static("dist")); //serving your static pages

app.post("/signup", (req, res) => {
  //connect to db
  // store data / user in the database
  //send message successfully signedup..
});
app.post("/login", (req, res) => {
  //connect to db
  // check email and password in the database
  //if email or password dont exist ,send error as response
  //send profile data ...
});
app.listen(PORT, () => console.log("server is running on port:", PORT));
