import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://urlshortner-k7bj.onrender.com",
    timeout:30000,
  withCredentials: true
});

export default axiosInstance;
