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

app.get("/livro", (req, res) => {
  res.status(200).json({
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    ano: 1954,
    genero: "Fantasia",
    editora: "Companhia das Letras",
  });
});
