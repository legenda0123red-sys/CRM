import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: "",
};

const searchStudentsSlice = createSlice({
  name: "SearchStudents",
  initialState,
  reducers: {
    searchStudents(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
   
  },
});
export const { searchStudents } = searchStudentsSlice.actions;
export const searchStudentsReducer = searchStudentsSlice.reducer;
