import { Router } from "express";

const route = Router();

//GET /products

//Route for this GET /products
route.get("/", (req, res) => {
  //request handler // controller
  res.send("I received get request on /products");
});

//POST /products
route.post("/", (req, res) => {
  res.send("I received post request on /products");
});

//PATCH /products
route.patch("/", (req, res) => {
  res.send("I received patch request on /products");
});

export default route;
