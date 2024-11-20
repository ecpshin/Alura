import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());

const posts = [
  { id: 1, title: "Primeiro Post" },
  { id: 2, title: "Segundo Post" },
  { id: 3, title: "Terceiro Post" },
  { id: 4, title: "Quarto Post" },
  { id: 5, title: "Quinto Post" },
];

app.listen(process.env.ENV_PORT, () => {
  console.log("Server is running on port 3000");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
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
