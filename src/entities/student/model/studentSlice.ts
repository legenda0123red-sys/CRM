import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IStudent {
  name: string;
  username: string;
  phone: string;
  parentsPhone: string;
  courses: string[];
}

interface StudentState {
  students: IStudent[];
}

const initialState: StudentState = {
  students: [],
};

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent(state, action: PayloadAction<IStudent>) {
      state.students.push(action.payload);
    }, 
  },
});

export const { addStudent } = studentSlice.actions;
export const studentReducer = studentSlice.reducer;
