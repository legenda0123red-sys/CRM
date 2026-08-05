// UI
export { default as Create } from "./ui/CreateCourse"; // это експорт дизайна

// Redux — reducer и actions (для dispatch и store.ts)
export {
  createCourseModalReducer,
  openModal,
  closeModal,
  addCourse,
  deleteCourse
} from "./model/createSlice"; // это експорт для функций в model
