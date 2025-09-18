import axiosInstance from '../utils/axiosInstace.js';

export const loginUser = async (email, password) => {
  try {
const {data} = await axiosInstance.post("/api/auth/login", { email, password });
    return data;
  } catch (error) {
    console.error("Error Login:", error?.response?.data || error.message || error);
        throw new Error(
      error?.response?.data?.message || "Failed to Login"
    );
  }
};

export const registerUser = async (name, email, password) => {
  try {
const {data} = await axiosInstance.post("/api/auth/register", { name,email, password });
    return data;
  } catch (error) {
    console.error("Error in Registratioon:", error?.response?.data || error.message || error);
        throw new Error(
      error?.response?.data?.message || "Failed to Register"
    );
  }
};

export const logOutUser = async () => {
  try {
const {data} = await axiosInstance.get("/api/auth/logout");
    return data;
  } catch (error) {
    console.error("Error creating short URL:", error?.response?.data || error.message || error);
        throw new Error(
      error?.response?.data?.message || "Failed to create short URL"
    );
  }
};

export const getCurrentUser = async () =>{
    const {data} = await axiosInstance.get("/api/auth/me")
    return data
}

export const getAllUserUrls = async () =>{
    const {data} = await axiosInstance.get("/api/urls/urls")
    return data
}