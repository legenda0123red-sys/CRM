import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export interface ICourse {
  id?: string | number
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

interface ICourseBasa {
  isOpen: boolean;
  base: ICourse[];
}
const initialState: ICourseBasa = {
  isOpen: false,
  base: [],
};

const modalSlice = createSlice({
  name: "createCourseModal",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
    addCourse(state, action: PayloadAction<ICourse>) {
      state.base.push(action.payload);
    },
    deleteCourse(state, action: PayloadAction<number>) {
      state.base = state.base.filter((el) => el.id !== action.payload);
    },
  },
});

export const { openModal, closeModal, addCourse, deleteCourse } =
  modalSlice.actions;
export const createCourseModalReducer = modalSlice.reducer;
