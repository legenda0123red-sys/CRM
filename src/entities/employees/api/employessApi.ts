import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch } from "../../../shared/api/api";
import type { ICreateEmployees, IEmployees } from "../../../features/CreateEmployees/model/createEmployees";

export const getEmployees = createAsyncThunk("employees/all", async () => {
  return await apiFetch("/employees/all");
});

export const createEmployeesApi = createAsyncThunk(
  "employees/create",
  async (employee: ICreateEmployees): Promise<IEmployees> => {
    return await apiFetch("/employees/create", {
      method: "POST",
      body: JSON.stringify(employee),
    });
  },
);
