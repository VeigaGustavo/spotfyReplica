import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.json({ message: "Spotify Replica API" });
});

app.get("/artists", async (request, response) => {
  try {
    const artists = await db.collection("artists").find({}).toArray();
    response.json(artists);
  } catch (error) {
    console.error('Error fetching artists:', error);
    response.status(500).json({ error: 'Internal server error' });
  }
});

app.get("/songs", async (request, response) => {
  try {
    const songs = await db.collection("songs").find({}).toArray();
    response.json(songs);
  } catch (error) {
    console.error('Error fetching songs:', error);
    response.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
