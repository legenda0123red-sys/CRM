const API_URL = "http://localhost:3000";

export async function apiFetch(
  endpoint: string,
  options: RequestInit = {},
) {
  const token = localStorage.getItem("access_token");


  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => null);

    throw new Error(error?.message || "Ошибка запроса");
  }

  return response.json();
}