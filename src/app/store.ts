import { configureStore } from '@reduxjs/toolkit';
import { searchReducer } from '../features/SearchCourses/model/searchSlice';
import { createCourseModalReducer } from '../features/CreateCourse/model/createSlice';
import { createStudentReducer } from '../features/CreateStudents';


export const store = configureStore({
  reducer: {
    searchReducer,
    createCourseModalReducer,
    createStudentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;