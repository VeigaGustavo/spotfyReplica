import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/spotfyReplica";

const client = new MongoClient(URI);

export const db = client.db("spotfyReplica");

//const songCollection = await db.collection("songs").find({}).toArray();
//console.log(songCollection);

process.on('SIGINT', async () => {
  await client.close();
  process.exit();
});
