import axios from "axios";

const customFetch = axios.create({
  baseURL: `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_UNSPLASH_CLIENT_ACCESS_KEY
  }&query=`,
});

export default customFetch;