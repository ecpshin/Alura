import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());

const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Gato fazendo yoga",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    descricao: "Gato fazendo panqueca",
    imagem: "https://placecats.com/millie/300/150",
  },
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
