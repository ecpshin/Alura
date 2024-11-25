import express from "express";
import { getUsers, newUser } from "../controllers/usersController.js";

const routesUser = (app) => {
  app.use(express.json());
  app.get("/users", getUsers);
  app.post("/users", newUser);
};

export default routesUser;
