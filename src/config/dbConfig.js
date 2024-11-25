import { MongoClient } from "mongodb";

export default async function getConnection(stringConnection) {
  let mongoClient;
  try {
    mongoClient = new MongoClient(stringConnection);
    console.log("Conectando ao Cluster0 do MongoDB...");
    await mongoClient.connect();
    console.log("Conectado ao Cluster0 do MongoDB...");
    return mongoClient;
  } catch (error) {
    console.error(`Erro ao conectar ao Cluster0 do MongoDB: ${error}`);
    process.exit();
  }
}
