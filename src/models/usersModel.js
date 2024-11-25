import getConnection from "../config/dbConfig.js";

const conexao = await getConnection(process.env.MONGO_URI);

const allUsers = async () => {
  return await conexao
    .db("imersao-instabytes")
    .collection("users")
    .find()
    .toArray();
};

const userCreate = async (user) => {
  return await conexao
    .db("imersao-instabytes")
    .collection("users")
    .insertOne(user);
};

export { allUsers, userCreate };
