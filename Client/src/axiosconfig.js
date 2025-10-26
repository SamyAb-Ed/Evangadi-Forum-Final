import axios from "axios";

// Debug: Log the API base URL
console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);

// Temporary hardcoded URL for testing
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://evangadi-forum-final.onrender.com/api";

console.log("Using API URL:", API_BASE_URL);

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export default axiosInstance;
