import type { RegistrData } from "../../../features/RegistrationForm/RegistrationForm";
import { apiFetch } from "../../../shared/api/api";


export async function createAdmin(data: RegistrData) {
  return apiFetch("/auth/admin/create", {
    method: "POST",
    body: JSON.stringify({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    }),
  });
}