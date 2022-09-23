const API_URL = import.meta.env.VITE_API_URL;

export const server = async <T>(
  input: `/${string}`,
  init?: RequestInit
): Promise<T> => {
  const response = await fetch(`${API_URL}${input}`, init);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return (await response.json()) as Promise<T>;
};
