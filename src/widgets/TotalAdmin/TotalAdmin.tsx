import { useSelector } from "react-redux";
import { Courses, Student, Employees } from "../../shared/images/images";
import type { RootState } from "../../app/store";
import { useTranslation } from "react-i18next";

function TotalAdmin() {
  const AllCourse = useSelector(
    (state: RootState) => state.createCourseModalReducer.base,
  );
  const AllStudents = useSelector(
    (state: RootState) => state.studentReducer.students,
  );
  const { t, i18n } = useTranslation("total");
  return (
    <>
      <section
      key={i18n.language}
      className="language-fade total-data flex justify-between mb-12.5">
        <div className="total-data__card total-data__card--students flex flex-col gap-9 bg-indigo-500 w-96 h-55 rounded-lg px-6 py-6">
          <div className="total-data__icon w-10">
            <img src={Student} alt="" />
          </div>
          <h2 className="total-data__label text-3xl font-bold text-white">
            {t("students")}
          </h2>
          <span className="total-data__count text-2xl font-semibold text-white">
            {AllStudents.length}
          </span>
        </div>

        <div className="total-data__card total-data__card--courses flex flex-col gap-9 bg-violet-500 w-96 h-55 rounded-lg px-6 py-6">
          <div className="total-data__icon w-10">
            <img src={Courses} alt="" />
          </div>
          <h2 className="total-data__label text-3xl font-bold text-white">
            {t("courses")}
          </h2>
          <span className="total-data__count text-2xl font-semibold text-white">
            {AllCourse.length}
          </span>
        </div>

        <div className="total-data__card total-data__card--revenue flex flex-col gap-9 bg-fuchsia-500 w-96 h-55 rounded-lg px-6 py-6">
          <div className="total-data__icon w-10">
            <img src={Employees} alt="" />
          </div>
          <h2 className="total-data__label text-3xl font-bold text-white">
            {t("employees")}
          </h2>
          <span className="total-data__count text-2xl font-semibold text-white">
            {/* Число сотрудников */} 0
          </span>
        </div>
      </section>
    </>
  );
}
export default TotalAdmin;
