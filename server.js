//import "dotenv/config";
import express from "express";
import routes from "./src/routes/postsRoutes.js";
import routesUsers from "./src/routes/usersRoutes.js";

const app = express();
routes(app);
routesUsers(app);

app.listen(process.env.ENV_PORT, () => {
  console.log(`Server is running on port ${process.env.ENV_PORT}`);
});
