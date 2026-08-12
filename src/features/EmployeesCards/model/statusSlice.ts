import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Status = "Active" | "On leave" | "Sick" | "Inactive";

export interface Employee {
  id: number;
  initials: string;
  name: string;
  email?: string;
  role: string;
  students: number | null;
  status: Status;
  avatarClass: string;
}

interface EmployeesState {
  employees: Employee[];
}


const initialState: EmployeesState = {
  employees: [
    {
      id: 1,
      initials: "АС",
      name: "Анна Соколова",
      role: "Manager",
      students: 34,
      status: "Active",
      avatarClass: "bg-blue-100 text-blue-800",
    },
    {
      id: 2,
      initials: "ДК",
      name: "Дмитрий Ковалёв",
      role: "Teacher",
      students: 58,
      status: "On leave",
      avatarClass: "bg-violet-100 text-violet-800",
    },
    {
      id: 3,
      initials: "МП",
      name: "Мария Петрова",
      role: "Curator",
      students: 41,
      status: "Sick",
      avatarClass: "bg-amber-100 text-amber-800",
    },
    {
      id: 4,
      initials: "",
      name: "Игорь Волков",
      email: "igor@company.com",
      role: "Manager",
      students: null,
      status: "Inactive",
      avatarClass: "bg-gray-100 text-gray-500",
    },
  ],
};

const statusSlice = createSlice({
  name: "employees",
  initialState,

  reducers: {
    changeStatus: (
      state,
      action: PayloadAction<{
        employeeId: number;
        status: Status;
      }>,
    ) => {
      const employee = state.employees.find(
        (employee) => employee.id === action.payload.employeeId,
      );

      if (employee) {
        employee.status = action.payload.status;
      }
    },
  },
});

export const { changeStatus } = statusSlice.actions;
export const statusReducer = statusSlice.reducer;
