import { Link, useParams } from "react-router-dom";
import { deleteCourse } from "../../features/CreateCourse/model/createSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { TeacherCard } from "../TeacherCard";
import { OpenW } from "../../features/AssignStudent";
function OneCourseCard() {
  const dispatch = useDispatch<AppDispatch>();
  const students = useSelector(
    (state: RootState) => state.createStudentReducer.students,
  );
  const { id } = useParams();

  const courses = useSelector(
    (state: RootState) => state.createCourseModalReducer.base,
  );

  const course = courses.find((course) => course.id === Number(id));

  if (!course) {
    return (
      <div className="text-center">
        <h2 className="text-gray-500 text-lg font-bold mb-5">Данные не найдены. Откройте страницу через список курсов.</h2>
          <button className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600">
              <Link to="/dashboard">↩ Back</Link>
            </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex gap-8 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 ">
        <div className="flex flex-col flex-1">
          <h2 className="text-3xl font-bold">{course.title}</h2>

          <p className="mt-2 text-gray-500">Полный курс по {course.title}.</p>

          <div className="flex flex-wrap gap-4 mt-6">
            <div className="w-44 bg-slate-100 rounded-xl p-4">
              <p className="text-sm text-gray-500">Всего уроков</p>

              <h3 className="text-2xl font-bold">{course.lessons}</h3>
            </div>

            <div className="w-44 bg-slate-100 rounded-xl p-4">
              <p className="text-sm text-gray-500">Студентов</p>

              <h3 className="text-2xl font-bold">{students.length}</h3>
            </div>

            <div className="w-44 bg-slate-100 rounded-xl p-4">
              <p className="text-sm text-gray-500">Длительность</p>

              <h3 className="text-2xl font-bold">2 часа</h3>
            </div>

            <div className="w-44 bg-slate-100 rounded-xl p-4">
              <p className="text-sm text-gray-500">Время курса</p>

              <h3 className="text-xl font-bold">{course.time}</h3>
            </div>

            <div className="w-44 bg-slate-100 rounded-xl p-4">
              <p className="text-sm text-gray-500">Статус</p>

              <h3 className="font-bold text-green-600">Активный</h3>
            </div>

            <div className="w-44 bg-slate-100 rounded-xl p-4">
              <p className="text-sm text-gray-500">Старт группы</p>

              <h3 className="text-xl font-bold">{course.startDate}</h3>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 rounded-xl bg-cyan-700 text-white font-semibold hover:bg-cyan-800">
              Редактировать
            </button>

            <button
              onClick={() => dispatch(deleteCourse(Number(course.id)))}
              className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600"
            >
              Удалить
            </button>

            <button
            onClick={() => dispatch(OpenW(Number(course.id)))}
             className="rounded-xl px-6 py-3 bg-gray-700 text-white font-semibold hover:bg-gray-800">Add Students</button>

            <button className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600">
              <Link to="/dashboard">↩ Back</Link>
            </button>
          </div>
        </div>

        <div className="w-96 border-l pl-6 flex flex-col">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold">Teachers</h2>

            <button className="px-4 py-2 rounded-lg bg-cyan-700 text-white hover:bg-cyan-800">
              + Add
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <TeacherCard />
            <TeacherCard />
          </div>
        </div>
      </div>
    </>
  );
}
export default OneCourseCard;
