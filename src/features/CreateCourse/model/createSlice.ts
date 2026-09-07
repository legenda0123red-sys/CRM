import { createSlice } from "@reduxjs/toolkit";

interface ICourseBasa {
  isOpen: boolean;
}

const initialState: ICourseBasa = {
  isOpen: false,
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
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export const createCourseModalReducer = modalSlice.reducer;