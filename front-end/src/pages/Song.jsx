import React, { useState, useEffect } from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { getSongs } from "../assets/database/songs";
import { getArtists } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const [artist, setArtist] = useState(null);
  const [artistSongs, setArtistSongs] = useState([]);
  const [randomSongs, setRandomSongs] = useState({ first: null, second: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [songs, artists] = await Promise.all([
          getSongs(),
          getArtists()
        ]);

        const currentSong = songs.find(
          (songObj) => songObj._id === id
        );

        if (currentSong) {
          setSong(currentSong);
          
          const currentArtist = artists.find(
            (artistObj) => artistObj.name === currentSong.artist
          );
          setArtist(currentArtist);

          const artistSongs = songs.filter(
            (songObj) => songObj.artist === currentSong.artist
          );
          setArtistSongs(artistSongs);

          if (artistSongs.length > 0) {
            const randomIndex1 = Math.floor(Math.random() * artistSongs.length);
            let randomIndex2;
            do {
              randomIndex2 = Math.floor(Math.random() * artistSongs.length);
            } while (randomIndex2 === randomIndex1);

            setRandomSongs({
              first: artistSongs[randomIndex1]._id,
              second: artistSongs[randomIndex2]._id
            });
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading || !song || !artist) {
    return <div className="song">Loading...</div>;
  }

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={song.image} alt={`Imagem da música ${song.name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artist._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artist.image}
            alt={`Imagem do Artista ${song.artist}`}
          />
        </Link>

        <Player
          duration={song.duration}
          randomIdFromArtist={randomSongs.first}
          randomId2FromArtist={randomSongs.second}
          audio={song.audio}
        />

        <div>
          <p className="song__name">{song.name}</p>
          <p>{song.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
