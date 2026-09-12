import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AssignStudentState {
  isOpen: boolean;
  courseId: number | null;
  selectedIds: number[];
}

const initialState: AssignStudentState = {
  isOpen: false,
  courseId: null,
  selectedIds: [],
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
    toggleStudent(state, action: PayloadAction<number>) {
      const id = action.payload;
      if (state.selectedIds.includes(id)) {
        state.selectedIds = state.selectedIds.filter((sid) => sid !== id);
      } else {
        state.selectedIds.push(id);
      }
    },
  },
});

export const { OpenW, closeW, toggleStudent } = assignStudentSlice.actions;

export const AssignStudentReducer = assignStudentSlice.reducer;
