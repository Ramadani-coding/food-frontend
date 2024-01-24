import axios from "axios";

const api = axios.create({
  baseURL: "https://api-pos.cyclic.app",
});

export default api;
