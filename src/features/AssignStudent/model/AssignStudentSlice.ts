import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AssignStudentState {
  isOpen: boolean;
  courseId: number | null;
}

const initialState: AssignStudentState = {
  isOpen: false,
  courseId: null,
};


export const assignStudentSlice = createSlice({
  name: "AssignStudent",
  initialState,

  reducers: {

    OpenW(state, action: PayloadAction<number>) {
      state.isOpen = true;
      state.courseId = action.payload;
    },


    closeW(state) {
      state.isOpen = false;
      state.courseId = null;
    },

  },
});


export const { OpenW, closeW } = assignStudentSlice.actions;

export const AssignStudentReducer = assignStudentSlice.reducer;