import { apiFetch } from "../../../shared/api/api";

export async function GetProfile() {
  return await apiFetch('/auth/profile')
}
