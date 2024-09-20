export const isJsonFormat = (text: string) => {
  try {
    const tokens = JSON.parse(text);

    return tokens.hasOwnProperty("access") && tokens.hasOwnProperty("refresh");
  } catch (error) {
    localStorage.removeItem("jwt");
    return false;
  }
};
