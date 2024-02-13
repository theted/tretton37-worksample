const API_URL = "https://api.1337co.de/v3/employees";
const API_KEY = import.meta.env.VITE_API_KEY;

export const getEmployees = async () => {
  const response = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });
  return response.json();
};
