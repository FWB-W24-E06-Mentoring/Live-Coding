import { Router } from "express";
import {
  getUsers,
  postUser,
  updateUser,
} from "../controllers/usersController.js";

const route = Router();

//GET /users

//Route for this GET /users
route.get("/", getUsers);

//POST /users
route.post("/", postUser);

//PATCH /users
route.patch("/:id", updateUser);

/* route.route("/").get(getUsers).post(postUser).patch(updateUser) */

export default route;
