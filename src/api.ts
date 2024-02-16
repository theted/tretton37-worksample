import { API_URL, API_KEY } from "./constants";

export const getEmployees = async () => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });
  return response.json();
};
