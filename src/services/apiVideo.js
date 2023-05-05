import axios from "axios";

const key = "563492ad6f9170000100000148dcc8ec392147ce805043f397885081";

export async function FetchVideo(value, page) {
  return await axios.get(
    `https://api.pexels.com/videos/search?query=${value}&page=${page}&per_page=12`,
    {
      headers: {
        Authorization: key,
      },
    }
  );
}
