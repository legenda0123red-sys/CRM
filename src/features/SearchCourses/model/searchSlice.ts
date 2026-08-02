import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: "",
};

const searchSlice = createSlice({
  name: "SearchCourse",
  initialState,
  reducers: {
    search(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
   
  },
});
export const { search } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
