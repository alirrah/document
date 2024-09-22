import axios from "axios";
import { getBaseUrl } from "@site/src/utils/APIUtil";
import { TokenInterface } from "../interfaces/TokenInterface";

const baseUrl = getBaseUrl();

export const getContent = async (
  id: number,
  token: TokenInterface
) => {
  try {
    const response = await axios.get(`${baseUrl}/documents/${id}/`, {
      headers: {
        Authorization: `Bearer ${token.access}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};
