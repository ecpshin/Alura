import express from "express";
import { listarPosts } from "../controllers/postsController.js";

/**
 * Sets up routes for the app.
 *
 * @param {import("express").Express} app
 */
const routes = (app) => {
  app.use(express.json());

  app.get("/posts", listarPosts);
};

export default routes;
