import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export interface ICreateEmployees {
  id?: number;
  fullName: string;
  email: string;
  role: "Менеджер продаж" | "Преподаватель" | "Куратор" | "Администратор";
}

export interface IEmployeesModal {
  open: boolean;
}

export interface IEmployeesState extends IEmployeesModal {
  list: ICreateEmployees[];
}

const initialState: IEmployeesState = {
  list: [],
  open: false,
};

const createEmployeesSlice = createSlice({
  name: "createEmployees",
  initialState,
  reducers: {
    addEmployees(state, action: PayloadAction<ICreateEmployees>) {
      state.list.push(action.payload);
    },
    openEmployeesW(state) {
      state.open = true
    },
    closeEmployeesW(state) {
        state.open =  false
    }
  },
});
export const { addEmployees, closeEmployeesW, openEmployeesW} = createEmployeesSlice.actions;
export const createEmployeesReducer = createEmployeesSlice.reducer;
