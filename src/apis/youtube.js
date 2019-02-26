import axios from "axios";

const KEY = "AIzaSyCsl1w2QJo60p8jJmQFD_AE892rN8C0SBw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
