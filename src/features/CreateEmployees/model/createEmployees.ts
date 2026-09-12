import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  createEmployeesApi,
  getEmployees,
} from "../../../entities/employees/api/employessApi";

export type EmployeeRole =
  | ""
  | "Менеджер"
  | "Преподаватель"
  | "Куратор"
  | "Администратор";

export interface IEmployees {
  id: number;
  fullName: string;
  email: string;
  role: EmployeeRole;
}

export type ICreateEmployees = Omit<IEmployees, "id">;

export interface IMessage {
  text: string;
  color: string;
}

export interface IEmployeesModal {
  open: boolean;
  loading: boolean;
  error: string | null;
}

export interface IEmployeesState extends IEmployeesModal {
  list: IEmployees[];
}

const initialState: IEmployeesState = {
  list: [],
  open: false,
  loading: false,
  error: null,
};

const createEmployeesSlice = createSlice({
  name: "createEmployees",
  initialState,

  reducers: {
    changeRole: (
      state,
      action: PayloadAction<{
        employeeId: number;
        role: IEmployees["role"];
      }>,
    ) => {
      const employee = state.list.find(
        (employee) => employee.id === action.payload.employeeId,
      );

      if (employee) {
        employee.role = action.payload.role;
      }
    },

    closeEmployeesW(state) {
      state.open = false;
    },
    openEmployeesW(state) {
      state.open = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.list = action.payload;
      })
      .addCase(getEmployees.rejected, (state) => {
        state.loading = false;
        state.error = "Не удается получить студентов";
      })

      .addCase(createEmployeesApi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        createEmployeesApi.fulfilled,
        (state, action: PayloadAction<IEmployees>) => {
          state.loading = false;
          state.error = null;
          state.list.push(action.payload);
        },
      )
      .addCase(createEmployeesApi.rejected, (state) => {
        state.loading = false;
        state.error = "Не удается создать работника";
      });
  },
});

export const { openEmployeesW, closeEmployeesW, changeRole } =
  createEmployeesSlice.actions;
export const createEmployeesReducer = createEmployeesSlice.reducer;
