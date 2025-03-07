import express from "express";
import usersRoute from "./routes/usersRoute.js";
import productsRoute from "./routes/productsRoute.js";

const PORT = 3000;

const app = express();

// what is middleware
// middleware is a function ,it has three parameter , request and response objects and next function.
// middleware can send response to client or forward your request to next handler.

//use middleware
/* app.use(function log(req, res, next) {
  console.log(req.url);
}); */

function log(req, res, next) {
  //custom middleware full control
  console.log("I am a middleware");
  /*  res.send("i am a middleware"); */
  next();
}
app.use(log);

//middleware (external and internal(custom))
//external middlewares just forward your request to next handler
/* app.use(express.json()); */ // parsing any incoming json data and attach it in req.body

/* app.use(express.static("views"));
app.use(express.urlencoded()); */

// any request /users
app.use("/users", usersRoute);
// make routes for /products
app.use("/products", productsRoute);
// make routes for /orders

//page not found 404 error handling middleware
app.use((req, res, next) => {
  const number = 123;
  /*   res.send(number); */
  /*   res.json(number); */
  res.status(404).json("no such route exist");
});

//universal error handling middleware
app.use((err, req, res, next) => {
  //handle all errors inside your server
  console.log(err.stack); // debugging
  res.status(err.status || 500).send({ message: err.message });
});

app.listen(PORT, () => console.log("server is running on port", PORT));

// MVC (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic
// M stands for Model (data)
// V stands for View (user interfaces / frontend)
// C stands for Controller (logic // controlling)
