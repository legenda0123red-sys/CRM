import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
export interface ICreateEmployees {
  id?: number;
  fullName: string;
  email: string;
  role: "" | "Менеджер" | "Преподаватель" | "Куратор" | "Администратор";
}

// export interface Employee {
//   id: number;
//   initials: string;
//   name: string;
//   email?: string;
//   role: string;
//   groups: number | null;
//   avatarClass: string;
// }

export interface IMessage {
  text: string;
  color: string;
}

export interface IEmployeesModal {
  open: boolean;
}

export interface IEmployeesState extends IEmployeesModal {
  list: ICreateEmployees[];
}

const initialState: IEmployeesState = {
  list: [
    {
      id: 1,
      fullName: "Анна Соколова",
      email: "anna@company.com",
      role: "Менеджер",
    },
    {
      id: 2,
      fullName: "Дмитрий Ковалёв",
      email: "dmitry@company.com",
      role: "Преподаватель",
    },
    {
      id: 3,
      fullName: "Мария Петрова",
      email: "maria@company.com",
      role: "Куратор",
    },
    {
      id: 4,
      fullName: "Игорь Волков",
      email: "igor@company.com",
      role: "Администратор",
    },
  ],
  open: false
};

const createEmployeesSlice = createSlice({
  name: "createEmployees",
  initialState,

  reducers: {
    addEmployee: (state, action: PayloadAction<ICreateEmployees>) => {
      state.list.push(action.payload);
    },

    changeRole: (
      state,
      action: PayloadAction<{
        employeeId: number;
        role: ICreateEmployees["role"];
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
    state.open = false
  },
  openEmployeesW(state) {
    state.open = true
  }
  },
});

export const { addEmployee, openEmployeesW, closeEmployeesW, changeRole } = createEmployeesSlice.actions;
export const createEmployeesReducer = createEmployeesSlice.reducer;
