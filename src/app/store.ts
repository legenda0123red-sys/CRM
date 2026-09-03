import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "../features/SearchCourses/model/searchSlice";
import { createCourseModalReducer } from "../features/CreateCourse/model/createSlice";
import { createStudentReducer } from "../features/CreateStudents";
import { searchStudentsReducer } from "../features/SearchStudents";
import { AssignStudentReducer } from "../features/AssignStudent/model/AssignStudentSlice";
import { AssignSearchReducer } from "../features/AssignSearch";
import { statusReducer } from "../features/EmployeesCards";
import { studentReducer } from "../entities/student";
import { createEmployeesReducer } from "../features/CreateEmployees";
import { themeReducer } from "../features/Theme";
import { createTaskReducer } from "../features/CreateTasks";

export const store = configureStore({
  reducer: {
    searchReducer,
    createCourseModalReducer,
    createStudentReducer,
    searchStudentsReducer,
    AssignStudentReducer,
    AssignSearchReducer,
    statusReducer,
    studentReducer,
    createEmployeesReducer,
    themeReducer,
    createTaskReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
