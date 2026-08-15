import { createSlice } from "@reduxjs/toolkit";

interface IStudentBase {
  Open: boolean;
}

const initialState: IStudentBase = {
  Open: false,
};

const createStudentSlice = createSlice({
  name: "createStudent",
  initialState,
  reducers: {
    openWindow(state) {
      state.Open = true;
    },
    closeWindow(state) {
      state.Open = false;
    },
  },
});
export const { openWindow, closeWindow } = createStudentSlice.actions;
export const createStudentReducer = createStudentSlice.reducer;
