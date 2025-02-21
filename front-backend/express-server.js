// using express framework
const express = require("express");
/* Port numbers range from 0 to 65535, but only port numbers 0 to 1023 are reserved for privileged services and designated as well-known ports. */
const PORT = 4000;
//creating express server
const server = express();

// request method
// GET POST PATCH PUT DELETE

// SERVER . METHOD ( PATH , HANDLER )
server.get("/", (req, res) => {
  res.sendFile("./index.html", { root: "." });
});

server.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: "." });
});

server.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: "." });
});

/* server.post("/user", (req, res) => {});
server.delete("/products", (req, res) => {}); */
server.listen(PORT, () => console.log("server is running on port : ", PORT));
