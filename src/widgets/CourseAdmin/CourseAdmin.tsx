import { useMemo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { Link } from "react-router-dom";
function CourseAdmin() {
  const allCourses = useSelector(
    (state: RootState) => state.createCourseModalReducer.base,
  );
  const searchCourse = useSelector(
    (state: RootState) => state.searchReducer.search,
  );

  const visibleCourses = useMemo(() => {
    const query = searchCourse.trim().toLowerCase();
    if (!query) return allCourses;
    return allCourses.filter((course) =>
      course.title.toLowerCase().includes(query),
    );
  }, [allCourses, searchCourse]);

  if (visibleCourses.length === 0) {
    return (
      <div className="ml-128">
        <p className="text-gray-500 font-bold">Курсы не найдены.</p>
      </div>
    );
  }

  return (
    <>
      {visibleCourses.map((item) => (
        <div
          key={item.id}
          className="course-list__item bg-white rounded-xl p-5 shadow-md w-72 flex flex-col gap-5 cursor-pointer hover:shadow-xl transition"
        >
          <div className="course-list__header">
            <h2 className="course-list__title text-2xl font-bold text-slate-800">
              {item.title}
            </h2>
            <p className="course-list__subtitle text-sm text-gray-500">
              {item.desc}
            </p>
          </div>

          <div className="course-list__info flex flex-col gap-3 text-[15px]">
            <div className="course-list__row flex justify-between">
              <span className="course-list__label text-gray-500">
                👨‍🎓 Студентов
              </span>
              <span className="course-list__value font-semibold">
                {item.AllStudents}
              </span>
            </div>

            <div className="course-list__row flex justify-between">
              <span className="course-list__label text-gray-500">
                👨‍🏫 Преподавателей
              </span>
              <span className="course-list__value font-semibold">
                {item.Mentors}
              </span>
            </div>

            <div className="course-list__row flex justify-between">
              <span className="course-list__label text-gray-500">
                📅 Расписание
              </span>
              <span className="course-list__value font-semibold">
                {item.timing}
              </span>
            </div>

            <div className="course-list__row flex justify-between">
              <span className="course-list__label text-gray-500">🕒 Время</span>
              <span className="course-list__value font-semibold">
                {item.time}
              </span>
            </div>

            <div className="course-list__row flex justify-between">
              <span className="course-list__label text-gray-500">
                📚🚀 Старт
              </span>
              <span className="course-list__value font-semibold">
                {item.startDate}
              </span>
            </div>
          </div>

          <button className="course-list__button cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition">
            <Link to={`/dashboard/course/${item.id}`} state={item}>
              Подробнее
            </Link>
          </button>
        </div>
      ))}
    </>
  );
}
export default CourseAdmin;
