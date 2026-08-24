import { createSlice } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

interface ThemeState {
  theme: Theme;
}

const initialState: ThemeState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

export const {  toggleTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;