/* import http from "http" */ // ESM  es6/ecma script 2015 module system
const http = require("http"); //CommonJS module system
const fs = require("fs");
const PORT = 3000;
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/contact") {
    const data = fs.readFileSync("./contact.html", "utf-8");
    res.end(data);
  } else if (req.url === "/products") {
    res.end(JSON.stringify({ name: "Syed" }));
  } else {
    const data = fs.readFileSync("./index.html", "utf-8");
    res.end(data);
  }
});

server.listen(PORT, () => console.log("server is running on port:", PORT));
