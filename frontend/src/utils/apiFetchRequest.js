import axios from "axios";

const apiFetchRequest = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  withCredentials: true,
});

export default apiFetchRequest;