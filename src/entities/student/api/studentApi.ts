import {
  createAsyncThunk,
} from "@reduxjs/toolkit";
import type { IStudent } from "../model/studentSlice";
import { apiFetch } from "../../../shared/api/api";

export const createStudent = createAsyncThunk(
  "student/create",
  async (student: IStudent) => {
   return await apiFetch('/students/create', {
    method: 'POST',
    body: JSON.stringify(student)
   })
  },
);

export const updateStudent = async (
  id: number,
  here: boolean,
) => {
  return apiFetch(`/students/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ here }),
  });
};

export const getStudents = createAsyncThunk("Students/getAll", async () => {
  return await apiFetch('/students/all')
});

