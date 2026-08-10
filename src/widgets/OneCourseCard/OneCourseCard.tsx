import { Link, useParams } from "react-router-dom";
import { deleteCourse } from "../../features/CreateCourse/model/createSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { TeacherCard } from "../TeacherCard";
import { OpenW } from "../../features/AssignStudent";
import { useTranslation } from "react-i18next";
function OneCourseCard() {
  const {t, i18n} = useTranslation('course')
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
      <div
      key={i18n.language}
      className="language-fade text-center">
        <h2 className="text-gray-500 text-lg font-bold mb-5">{t('dataNotFound')}</h2>
          <button className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600">
              <Link to="/dashboard">↩ {t('back')}</Link>
            </button>
      </div>
    );
  }

  return (
    <>
      <div
      key={i18n.language}
      className="language-fade flex gap-8 bg-white rounded-2xl shadow-lg border border-gray-200 p-6 ">
        <div className="flex flex-col flex-1">
          <h2 className="text-3xl font-bold">{course.title}</h2>

          <p className="mt-2 text-gray-500">Полный курс по {course.title}.</p>

          <div className="flex flex-wrap gap-4 mt-6">
            <div className="w-44 bg-slate-100 rounded-xl p-4">
              <p className="text-sm text-gray-500">{t('totalLessons')}</p>

              <h3 className="text-2xl font-bold">{course.lessons}</h3>
            </div>

            <div className="w-44 bg-slate-100 rounded-xl p-4">
              <p className="text-sm text-gray-500">{t('students')}</p>

              <h3 className="text-2xl font-bold">{students.length}</h3>
            </div>

            <div className="w-44 bg-slate-100 rounded-xl p-4">
              <p className="text-sm text-gray-500">{t('duration')}</p>

              <h3 className="text-2xl font-bold">2 {t('hour')}</h3>
            </div>

            <div className="w-44 bg-slate-100 rounded-xl p-4">
              <p className="text-sm text-gray-500">{t('courseTime')}</p>

              <h3 className="text-xl font-bold">{course.time}</h3>
            </div>

            <div className="w-44 bg-slate-100 rounded-xl p-4">
              <p className="text-sm text-gray-500">{t('status')}</p>

              <h3 className="font-bold text-green-600">{t('active')}</h3>
            </div>

            <div className="w-44 bg-slate-100 rounded-xl p-4">
              <p className="text-sm text-gray-500">{t('startGp')}</p>

              <h3 className="text-xl font-bold">{course.startDate}</h3>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="px-6 py-3 rounded-xl bg-cyan-700 text-white font-semibold hover:bg-cyan-800">
              {t('edit')}
            </button>

            <button
              onClick={() => dispatch(deleteCourse(Number(course.id)))}
              className="px-6 py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600"
            >
              {t('delete')}
            </button>

            <button
            onClick={() => dispatch(OpenW(Number(course.id)))}
             className="rounded-xl px-6 py-3 bg-gray-700 text-white font-semibold hover:bg-gray-800">{t('addStudents')}</button>

            <button className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600">
              <Link to="/dashboard">↩ {t('back')}</Link>
            </button>
          </div>
        </div>

        <div className="w-96 border-l pl-6 flex flex-col">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold">{t('teachers')}</h2>

            <button className="px-4 py-2 rounded-lg bg-cyan-700 text-white hover:bg-cyan-800">
              + {t('add')}
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
