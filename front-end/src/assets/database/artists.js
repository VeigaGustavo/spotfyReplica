import { fetchArtists } from "../../../api/api.js";

export const getArtists = async () => {
  return await fetchArtists();
};
