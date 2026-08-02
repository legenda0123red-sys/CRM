import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IStudent {
    id?: number,
  title: string;
  phone: string;
  parentsPhone: string;
}

interface IStudentBase {
  students: IStudent[];
  Open: boolean;
}

const initialState: IStudentBase = {
  students: [],
  Open: false,
};

const createStudentSlice = createSlice({
  name: "createStudent",
  initialState,
  reducers: {
    openWindow(state){
        state.Open = true;
    },
    closeWindow(state){
        state.Open = false;
    }, 
    addStudent(state, action: PayloadAction<IStudent>){
        state.students.push(action.payload);
    }
  },
});
export const {openWindow, closeWindow, addStudent} = createStudentSlice.actions;
export const createStudentReducer = createStudentSlice.reducer;