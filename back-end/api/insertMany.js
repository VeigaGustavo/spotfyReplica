import { artistArray } from "../../front-end/api/api.js";
import { songsArray } from "../../front-end/api/api.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;

  return newSongObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistArray);

console.log(responseSongs);
console.log(responseArtists);

// console.log(newArtistArray);
// console.log(newSongsArray);
// console.log(songsArray);
