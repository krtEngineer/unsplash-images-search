import axios from "axios";

const customFetch = axios.create({
  baseURL: `https://api.unsplash.com/search/photos?query=`,
  headers: {
    Authorization: `Client-ID ${
      import.meta.env.VITE_UNSPLASH_CLIENT_ACCESS_KEY
    }`,
  },
});

export default customFetch;
