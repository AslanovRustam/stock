import axios from "axios";

const url = "https://deezerdevs-deezer.p.rapidapi.com/search?";
const key = "febaa8cdf4mshfa16efaca26c8d0p1c4591jsn48b90a2170a3";
const host = "deezerdevs-deezer.p.rapidapi.com";

export async function FetchMusic(value) {
  return await axios.get(`${url}q=${value}`, {
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": host,
    },
  });
}
