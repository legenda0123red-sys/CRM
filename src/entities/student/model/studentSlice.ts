import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getStudents } from "../api/studentApi";

export interface IStudent {
  id?: number;
  name: string;
  username: string;
  phone: string;
  parentsPhone: string;
  courses: string[];
  here: boolean;
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