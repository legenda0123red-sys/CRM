import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export interface ICourse {
  id?: number;
  title: string;
  desc: string;
  AllStudents: number;
  Mentors?: number;
  timing: string;
  time: string;
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
  },
});

export const { openModal, closeModal, addCourse } = modalSlice.actions;
export const createCourseModalReducer = modalSlice.reducer;
