import type { ILogin } from "../../../pages/Login/Login";

export async function LoginUser(data: ILogin) {
  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    console.log("Ответ backend:", result);

    if (!response.ok) {
      throw new Error(result.message || "Ошибка входа");
    }

    localStorage.setItem("access_token", result.access_token);

    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log("Ошибка login:", error.message);
    }

    throw error;
  }
}