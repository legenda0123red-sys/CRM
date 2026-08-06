import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SearchState } from "../../SearchStudents/model/searchStudentsSlice";


const initialState: SearchState ={
    search: ''
}

export const assignSearchSlice = createSlice({
    name: 'AssignSearchStudent',
    initialState,
    reducers: {
        SearchAssignStudent(state, action: PayloadAction<string>) {
            state.search = action.payload;
        }
    }
})
export const {SearchAssignStudent} = assignSearchSlice.actions;
export const AssignSearchReducer = assignSearchSlice.reducer;