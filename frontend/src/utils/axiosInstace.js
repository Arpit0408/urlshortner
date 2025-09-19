import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://urlshortner-k7bj.onrender.com", // ✅ Base URL
    timeout: 30000, // ✅ 30 second timeout
    withCredentials: true // ✅ Cookies allow karega (if CORS allows it)
});

export default axiosInstance;
