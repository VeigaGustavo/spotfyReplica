import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { getArtists } from "../assets/database/artists";
import { getSongs } from "../assets/database/songs";

const Artist = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [artistSongs, setArtistSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomSongId, setRandomSongId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [artists, songs] = await Promise.all([
          getArtists(),
          getSongs()
        ]);

        const currentArtist = artists.find(
          (artistObj) => artistObj._id === id
        );

        if (currentArtist) {
          setArtist(currentArtist);
          const artistSongs = songs.filter(
            (songObj) => songObj.artist === currentArtist.name
          );
          setArtistSongs(artistSongs);

          if (artistSongs.length > 0) {
            const randomIndex = Math.floor(Math.random() * artistSongs.length);
            setRandomSongId(artistSongs[randomIndex]._id);
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

  if (loading || !artist) {
    return <div className="artist">Loading...</div>;
  }

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artist.banner})`,
        }}
      >
        <h2 className="artist__title">{artist.name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={artistSongs} />
      </div>

      {randomSongId && (
        <Link to={`/song/${randomSongId}`}>
          <FontAwesomeIcon
            className="single-item__icon single-item__icon--artist"
            icon={faCirclePlay}
          />
        </Link>
      )}
    </div>
  );
};

export default Artist;
