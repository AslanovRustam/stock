import axios from "axios";

const urlToken = "https://accounts.spotify.com/api/token";
const clientID = "dfe80ea3c52e4c798dd4fb8d535cedd1";
const clientSecret = "9278f4f142b142aaba18ce520d346a9b";
const redirectUrl = "http://localhost:3000/stock/music";
const responseType = "token";

export const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=${responseType}&redirect_uri=${redirectUrl}&scope=%20`;
// export async function getSpotifyToken() {
//   return await axios.post(`${urlToken}`, {
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: `grant_type-client_credentials&client_id=${clientID}&client_secret=${clientSecret}`,
//   });
// }

export async function getSpotifyToken() {
  return await axios({
    method: "post",
    url: urlToken,
    params: {
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}`,
    },
  });
}
// grant_type=client_credentials&client_id=${clientID}&client_secret=${clientSecret}
// export async function FetchMusic(value) {
//   return await axios.get(`${url}q=${value}`, {
//     headers: {
//       "X-RapidAPI-Key": key,
//       "X-RapidAPI-Host": host,
//     },
//   });
// }
