import { MongoClient } from "mongodb";

const URI = "mongodb+srv://gustavocarmo:Veiga.2004&7@cluster0.7w4dd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotfyReplica");

//const songCollection = await db.collection("songs").find({}).toArray();
//console.log(songCollection);
