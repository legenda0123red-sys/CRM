import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Status = "Active" | "On leave" | "Sick" | "Inactive";

interface StatusState {
  byEmployeeId: Record<number, Status>;
}

const initialState: StatusState = {
  byEmployeeId: {
    1: "Active",
    2: "On leave",
    3: "Sick",
    4: "Inactive",
  },
};

const statusSlice = createSlice({
  name: "status",
  initialState,

  reducers: {
    changeStatus: (
      state,
      action: PayloadAction<{
        employeeId: number;
        status: Status;
      }>,
    ) => {
      state.byEmployeeId[action.payload.employeeId] = action.payload.status;
    },
  },
});

export const { changeStatus } = statusSlice.actions;
export const statusReducer = statusSlice.reducer; 