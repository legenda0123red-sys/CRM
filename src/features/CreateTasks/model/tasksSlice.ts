import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

export interface IHomework {
  title: string;
  desc: string;
  deadline: string;
  score: number;
}

interface HwState {
  homework: IHomework[];
  loading: boolean;
  success: boolean;
  error: string | null;
  isOpen: boolean;
}

const initialState: HwState = {
  homework: [],
  loading: false,
  success: false,
  error: null,
  isOpen: false,
};

export const getHw = createAsyncThunk("homework/all", async () => {
  const response = await fetch("http://localhost:3000/homework/all");

  if (!response.ok) {
    throw new Error("Не удалось получить задания");
  }

  return await response.json();
});

export const createHw = createAsyncThunk(
  "homework/create",
  async (hw: IHomework) => {
    const response = await fetch("http://localhost:3000/homework/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hw),
    });

    if (!response.ok) {
      throw new Error("Не удалось создать задание");
    }

    return await response.json();
  },
);

const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    resetSuccess(state) {
      state.success = false;
    },

    openTask(state) {
      state.isOpen = true;
    },

    closeTask(state) {
      state.isOpen = false;
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(getHw.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getHw.fulfilled, (state, action) => {
        state.loading = false;
        state.homework = action.payload;
      })

      .addCase(getHw.rejected, (state) => {
        state.loading = false;
        state.error = "Не удалось получить задания";
      })

      .addCase(createHw.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(
        createHw.fulfilled,
        (state, action: PayloadAction<IHomework>) => {
          state.loading = false;
          state.success = true;

          state.homework.push(action.payload);
        },
      )

      .addCase(createHw.rejected, (state) => {
        state.loading = false;
        state.error = "Не удалось создать задание";
      });
  },
});

export const { openTask, closeTask, resetSuccess } = taskSlice.actions;

export const createTaskReducer = taskSlice.reducer;
