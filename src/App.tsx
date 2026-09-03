import { Routes, Route } from "react-router-dom";
import { Registr } from "./pages/Registr";
import { Login } from "./pages/Login";
import { StudentsAdmin } from "./widgets/StudentsAdmin";
import { Home } from "./pages/Home";
import { OneCourse } from "./features/OneCourse";
import { NotFound } from "./widgets/NotFound";
import { EmployeesAdmin } from "./widgets/EmployeesAdmin";
import { ChangePass } from "./pages/ChangePass";
import { DashLayoutUser } from "./widgets/DashLayoutUser";
import { UserHw } from "./widgets/UserHw";
import { UserMyCourses } from "./widgets/UserMyCourses";
import { UserAttendance } from "./widgets/UserAttendance";
import { UserAdvance } from "./widgets/UserAdvance";
import { DashLayoutTeacher } from "./widgets/DashLayoutTeacher";
import { TeacherCourses } from "./widgets/TeacherCourses";
import { TeacherHw } from "./widgets/TeacherHw";
import { CreateTasks } from "./features/CreateTasks";
import { TeacherAtten } from "./widgets/TeacherAtten";
import { TeacherAdvance } from "./widgets/TeacherAdvance";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Registr />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/students" element={<StudentsAdmin />} />
      <Route path="/chat" element={<StudentsAdmin />} />
      <Route path="/course" element={<StudentsAdmin />} />
      <Route path="/settings" element={<StudentsAdmin />} />
      <Route path="/registr" element={<Registr />} />
      <Route path="/dashboard/course/:id" element={<OneCourse />} />
      <Route path="/login" element={<Login />} />
      <Route path="forgot" element={<ChangePass />} />
      <Route path="/employees" element={<EmployeesAdmin />} />
      <Route path="/user" element={<DashLayoutUser />}>
        <Route index element={<UserMyCourses />} />
        <Route path="Hw" element={<UserHw />} />
        <Route path="attendance" element={<UserAttendance />} />
        <Route path="advance" element={<UserAdvance />} />
      </Route>
      <Route path="/teacher" element={<DashLayoutTeacher />}>
        <Route index element={<TeacherCourses />} />
        <Route path="/teacher/Hw" element={<TeacherHw />} />
        <Route path="/teacher/attendance" element={<TeacherAtten />} />
        <Route path="/teacher/advance" element={<TeacherAdvance />} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route path="/create" element={<CreateTasks />} />
    </Routes>
  );
}
export default App;
