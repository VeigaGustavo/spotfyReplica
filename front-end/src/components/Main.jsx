import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getArtists } from "../assets/database/artists";
import { getSongs } from "../assets/database/songs";

const Main = ({ type }) => {
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (type === "artists" || type === undefined) {
          const artistsData = await getArtists();
          setArtists(artistsData);
        }
        if (type === "songs" || type === undefined) {
          const songsData = await getSongs();
          setSongs(songsData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type]);

  if (loading) {
    return <div className="main">Loading...</div>;
  }

  return (
    <div className="main">
      {/* Item List de Artistas */}
      {(type === "artists" || type === undefined) && (
        <ItemList
          title="Artistas"
          items={10}
          itemsArray={artists}
          path="/artists"
          idPath="/artist"
        />
      )}

      {/* Item List de Músicas */}
      {(type === "songs" || type === undefined) && (
        <ItemList
          title="Músicas"
          items={20}
          itemsArray={songs}
          path="/songs"
          idPath="/song"
        />
      )}
    </div>
  );
};

export default Main;
