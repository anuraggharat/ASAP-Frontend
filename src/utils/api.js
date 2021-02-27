import axios from "axios";

const api = axios.create({
  baseURL: "https://assapapi.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});
export default api;
