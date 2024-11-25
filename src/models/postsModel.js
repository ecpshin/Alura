import getConnection from "../config/dbConfig.js";

const conexao = await getConnection(process.env.MONGO_URI);

const allPosts = async () => {
  return await conexao
    .db("imersao-instabytes")
    .collection("posts")
    .find()
    .toArray();
};

export { allPosts };
