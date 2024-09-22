import axios from "axios";
import { getBaseUrl } from "@site/src/utils/APIUtil";
import { TokenInterface } from "../interfaces/TokenInterface";

const baseUrl = getBaseUrl();

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${baseUrl}/jwt/login/`, {
      username: username,
      password: password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const refreshTokens = async (token: TokenInterface) => {
  try {
    const response = await axios.post(`${baseUrl}/jwt/token/refresh/`, {
      refresh: token.refresh,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
