import axios from "axios";

// Prefer env; fall back to Render API in production, or localhost for dev
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://forum-sami-be.carpnon.com/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export default axiosInstance;
