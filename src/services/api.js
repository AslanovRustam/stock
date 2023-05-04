import axios from "axios";
axios.defaults.baseURL = "https://pixabay.com/api/";
axios.defaults.params = {
  orientation: "horizontal",
  per_page: 12,
  image_type: "photo",
  safesearch: true,
};
const key = "19076419-9578a5b9e86945eec97e7243e";

export async function FetchImages(value, page) {
  return await axios.get(`?key=${key}&q=${value}&page=${page}`);
}
