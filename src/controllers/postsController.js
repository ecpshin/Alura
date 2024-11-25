import { allPosts } from "../models/postsModel.js";

const listarPosts = async (req, res) => {
  const posts = await allPosts();
  res.status(200).json(posts);
};

export { listarPosts };
