import axios from "axios";

const URL = "http://localhost:3000";

export const fetchArtists = async () => {
  const response = await axios.get(`${URL}/artists`);
  return response.data;
};

export const fetchSongs = async () => {
  const response = await axios.get(`${URL}/songs`);
  return response.data;
};

export const getInitialData = async () => {
  try {
    const [artists, songs] = await Promise.all([
      fetchArtists(),
      fetchSongs()
    ]);
    return { artists, songs };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { artists: [], songs: [] };
  }
};
