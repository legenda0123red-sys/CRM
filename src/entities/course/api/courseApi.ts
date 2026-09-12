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
  lessons: number;
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
export type CreateCourseData = Omit<ICourse, "id">;

interface CourseState {
  courses: ICourse[];
  currentCourse: ICourse | null;
  loading: boolean;
  error: string | null;
}

const initialState: CourseState = {
  courses: [],
  loading: false,
  error: null,
  currentCourse: null,
};

export const createCourse = createAsyncThunk(
  "courses/create",
  async (course: CreateCourseData) => {
    return await apiFetch("/courses/create", {
      method: "POST",
      body: JSON.stringify(course),
    });
  },
);

export const getCourseById = createAsyncThunk(
  "course/getById",
  async (id: string) => {
    return await apiFetch(`/courses/one/${id}`);
  },
);

export const getCourses = createAsyncThunk("courses/all", async () => {
  return await apiFetch("/courses/all");
});

export const assignStudentsToCourse = createAsyncThunk(
  "course/assignStudents",
  async ({
    courseId,
    studentIds,
  }: {
    courseId: number;
    studentIds: number[];
  }) => {
    return await apiFetch(`/courses/assign/${courseId}`, {
      method: "PATCH",
      body: JSON.stringify({ studentIds }),
    });
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
      })
      .addCase(getCourseById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getCourseById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentCourse = action.payload;
      })

      .addCase(getCourseById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Ошибка";
      });
  },
});

export const courseReducer = courseSlice.reducer;
