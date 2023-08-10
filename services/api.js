import axios from "axios";

const api = axios.create({
  baseURL: "http://200.129.173.67:8080",
});
export default api;