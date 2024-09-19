import axios from "axios";

const baseUrl = "http://127.0.0.1:8000";

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${baseUrl}/jwt/login/`, {
      username,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
