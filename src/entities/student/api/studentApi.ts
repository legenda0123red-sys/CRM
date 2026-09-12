import { createAsyncThunk } from "@reduxjs/toolkit";
import type { CreateStudentDto } from "../model/studentSlice";
import { apiFetch } from "../../../shared/api/api";

export const createStudent = createAsyncThunk(
  "student/create",
  async (student: CreateStudentDto) => {
    return await apiFetch("/students/create", {
      method: "POST",
      body: JSON.stringify(student),
    });
  },
);

export const updateStudent = async (id: number, here: boolean) => {
  return apiFetch(`/students/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ here }),
  });
};
export const toggleStudentBlock = createAsyncThunk(
  "students/toggleBlock",
  async ({ id, isBlocked }: { id: number; isBlocked: boolean }) => {
    return await apiFetch(`/students/${id}/block`, {
      method: "PATCH",
      body: JSON.stringify({
        isBlocked,
      }),
    });
  },
);

export const getStudents = createAsyncThunk("students/getAll", async () => {
  return await apiFetch("/students/all");
});

export const deleteStudents = createAsyncThunk(
  "students/delete",
  async (id: number) => {
    return await apiFetch(`/students/delete/${id}`, {
      method: "DELETE",
    });
  },
);
