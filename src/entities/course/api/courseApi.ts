import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiFetch } from "../../../shared/api/api";

export interface ICourse {
  id?: string | number;
  title: string;
  desc: string;
  AllStudents: number;
  maxStudents: number;
  studentIds: string[];
  Mentors: number;
  lessons: string;
  completedLessons: number;
  startDate: string;
  endDate: string;
  days: string[];
  time: string;
  timing: string;
  level: "beginner" | "middle" | "advanced";
  format: "online" | "offline" | "hybrid";
  room: string;
  price: number;
  status: "planned" | "active" | "completed";
}

interface CourseState {
  courses: ICourse[];
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  courses: [],
  loading: false,
  error: null,
};

export const createCourse = createAsyncThunk(
  "courses/create",
  async (course: ICourse) => {
    return await apiFetch("/courses/create", {
      method: "POST",
      body: JSON.stringify(course),
    });
  },
);

export const getCourses = createAsyncThunk(
  "courses/all",
  async () => {
    return await apiFetch("/courses/all");
  },
);

const courseSlice = createSlice({
  name: "courses",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })

      .addCase(getCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Не удалось получить курсы";
      });

    builder
      .addCase(createCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(createCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses.push(action.payload);
      })

      .addCase(createCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Не удалось создать курс";
      });
  },
});

export const courseReducer = courseSlice.reducer;