import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json());

app.listen(process.env.ENV_PORT, () => {
  console.log("Server is running on port 3000");
});

app.get("/api", (req, res) => {
  res
    .status(200)
    .json(["Hello World! Bem vindo ao servidor da Imersão Dev Alura"]);
});
