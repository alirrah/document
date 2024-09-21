import { TokenInterface } from "@site/src/interfaces/TokenInterface";

const key: string = "jwt";

export const getToken = (): string | null => {
  return localStorage.getItem(key);
};

export const saveToken = (
  tokens: string | TokenInterface
): void => {
  if (typeof tokens === "string") {
    localStorage.setItem(key, tokens);
    return;
  }
  localStorage.setItem(key, JSON.stringify(tokens));
};

export const removeToken = (): void => {
  localStorage.removeItem(key);
};

export const isTokenValid = (token: string): boolean => {
  try {
    const tokens = JSON.parse(token);
    return tokens.hasOwnProperty("access") && tokens.hasOwnProperty("refresh");
  } catch (error) {
    removeToken();
    return false;
  }
};
