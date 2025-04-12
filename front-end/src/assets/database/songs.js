import { fetchSongs } from "../../../api/api.js";

export const getSongs = async () => {
  return await fetchSongs();
};
