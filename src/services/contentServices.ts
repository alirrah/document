import axios from "axios";

export const getContent = async (
  url: string,
  id: number,
  token: { access: string; refresh: string },
  setContent: (content: string | null) => void
) => {
  try {
    const response = await axios.get(`${url}/documents/${id}/`, {
      headers: {
        Authorization: `Bearer ${token.access}`,
      },
    });
    setContent(response.data.content);
  } catch (error) {
    throw error;
  }
};
