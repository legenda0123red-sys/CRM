import type { RegistrData } from "../../RegistrationForm/RegistrationForm";

export async function registerUser(data: RegistrData) {
  const response = await fetch("http://localhost:3000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    console.log("Backend error:", result);
    throw new Error(result.message || "Ошибка регистрации");
  }

  return result;
}
