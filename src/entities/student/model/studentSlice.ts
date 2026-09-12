import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getStudents } from "../api/studentApi";

export interface IStudentUser {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: "ADMIN" | "TEACHER" | "STUDENT";
  isBlocked: boolean;
}

export interface IStudent {
  id: number;
  username: string;
  phone: string;
  parentsPhone: string;
  courses: string[];
  here: boolean;
  user: IStudentUser;
}

export interface CreateStudentDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  parentsPhone: string;
}

interface StudentState {
  students: IStudent[];
  loading: boolean;
  error: string | null;
}

const initialState: StudentState = {
  students: [],
  loading: false,
  error: null,
};

const studentSlice = createSlice({
  name: "student",
  initialState,

  reducers: {
    addStudent(state, action: PayloadAction<IStudent>) {
      state.students.push(action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getStudents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload;
      })

      .addCase(getStudents.rejected, (state) => {
        state.loading = false;
        state.error = "Не удалось получить студентов";
      });
  },
});

export const { addStudent } = studentSlice.actions;

export const studentReducer = studentSlice.reducer;