import axios from "axios";

// Debug: Log the API base URL
console.log("API Base URL:", import.meta.env.VITE_API_BASE_URL);

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
});

export default axiosInstance;
