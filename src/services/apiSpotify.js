import axios from "axios";

const urlToken = "https://accounts.spotify.com/api/token";
const clientID = "dfe80ea3c52e4c798dd4fb8d535cedd1";
const clientSecret = "9278f4f142b142aaba18ce520d346a9b";
const redirectUrl = "https://aslanovrustam.github.io/stock/music";
const responseType = "token";

export const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=${responseType}&redirect_uri=${redirectUrl}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export async function FetchTracks(value, token) {
  return await axios.get("https://api.spotify.com/v1/search", {
    headers: { Authorization: `Bearer ${token}` },
    params: { q: value, type: "artist,track" },
  });
}
