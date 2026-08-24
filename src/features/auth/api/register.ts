import type { RegistrData } from "../../RegistrationForm/RegistrationForm";


export async function registerUser(data: RegistrData) {
  try {
    const response = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Ошибка регистрации");
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }

    throw error;
  }
}
