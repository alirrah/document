import axios from "axios";
import { getBaseUrl } from "../utils/apiUtil";

const baseUrl = getBaseUrl();

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
