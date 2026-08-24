import { Link, useParams } from "react-router-dom";
import { deleteCourse } from "../../features/CreateCourse/model/createSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { OpenW } from "../../features/AssignStudent";
import { useTranslation } from "react-i18next";
import { TeacherCard } from "../../entities/teachers";

function OneCourseCard() {
  const { t, i18n } = useTranslation("course");
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  const courses = useSelector(
    (state: RootState) => state.createCourseModalReducer.base,
  );

  const course = courses.find((course) => course.id === Number(id));

  if (!course) {
    return (
      <div key={i18n.language} className="language-fade flex flex-col items-center py-24 text-center">
        <h2 className="mb-5 text-lg font-bold text-gray-500">{t("dataNotFound")}</h2>
        <Link
          to="/dashboard"
          className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600"
        >
          ↩ {t("back")}
        </Link>
      </div>
    );
  }

  const statusMap: Record<string, { label: string; className: string }> = {
    active: { label: t("statusActive"), className: "text-emerald-600 dark:text-emerald-400" },
    planned: { label: t("statusPlanned"), className: "text-amber-600 dark:text-amber-400" },
    completed: { label: t("statusCompleted"), className: "text-slate-500 dark:text-slate-400" },
  };

  const levelMap: Record<string, string> = {
    beginner: "Beginner",
    middle: "Middle",
    advanced: "Advanced",
  };

  const formatMap: Record<string, { label: string; icon: string }> = {
    online: { label: "Online", icon: "💻" },
    offline: { label: "Offline", icon: "🏢" },
    hybrid: { label: "Hybrid", icon: "🔀" },
  };

  const status = statusMap[course.status] ?? statusMap.active;
  const format = formatMap[course.format] ?? formatMap.online;

  return (
    <div
      key={i18n.language}
      className="language-fade flex gap-8 rounded-3xl border border-gray-100 bg-white p-7 shadow-sm dark:border-slate-700 dark:bg-slate-900"
    >
      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
              {t("courseLabel")}
            </span>
            <h2 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
              {course.title}
            </h2>
            <p className="mt-2 text-gray-500 dark:text-slate-400">
              {t("fullCourse")} {course.title}.
            </p>
          </div>

          <div className="flex gap-2">
            <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              {levelMap[course.level] ?? course.level}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              {format.icon} {format.label}
            </span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <div className="w-44 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-gray-500 dark:text-slate-400">{t("totalLessons")}</p>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">{course.lessons}</h3>
          </div>

          <div className="w-44 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-gray-500 dark:text-slate-400">{t("students")}</p>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              {course.AllStudents}/{course.maxStudents}
            </h3>
          </div>

          <div className="w-44 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-gray-500 dark:text-slate-400">{t("duration")}</p>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{course.timing}</h3>
          </div>

          <div className="w-44 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-gray-500 dark:text-slate-400">{t("courseTime")}</p>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{course.time}</h3>
          </div>

          <div className="w-44 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-gray-500 dark:text-slate-400">{t("status")}</p>
            <h3 className={`font-bold ${status.className}`}>{status.label}</h3>
          </div>

          <div className="w-44 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-gray-500 dark:text-slate-400">{t("startGp")}</p>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
              {course.startDate} — {course.endDate}
            </h3>
          </div>

          <div className="w-44 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-gray-500 dark:text-slate-400">{t("days")}</p>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
              {course.days.join(" • ")}
            </h3>
          </div>

          <div className="w-44 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
            <p className="text-sm text-gray-500 dark:text-slate-400">{t("price")}</p>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
              {course.price.toLocaleString("ru-RU")} {t("currency")}
            </h3>
          </div>

          {course.room && (
            <div className="w-44 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
              <p className="text-sm text-gray-500 dark:text-slate-400">{t("room")}</p>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">{course.room}</h3>
            </div>
          )}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <button className="rounded-xl bg-cyan-700 px-6 py-3 font-semibold text-white transition hover:bg-cyan-800">
            {t("edit")}
          </button>

          <button
            onClick={() => dispatch(deleteCourse(Number(course.id)))}
            className="rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600 dark:bg-red-800 dark:hover:bg-red-700"
          >
            {t("delete")}
          </button>

          <button
            onClick={() => dispatch(OpenW(Number(course.id)))}
            className="rounded-xl bg-gray-700 px-6 py-3 font-semibold text-white transition hover:bg-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
          >
            {t("addStudents")}
          </button>

          <Link
            to="/dashboard"
            className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600 dark:bg-emerald-800 dark:hover:bg-emerald-700"
          >
            ↩ {t("back")}
          </Link>
        </div>
      </div>

      <div className="flex w-96 flex-col border-l border-gray-100 pl-6 dark:border-slate-700">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t("teachers")}</h2>

          <button className="rounded-lg bg-cyan-700 px-4 py-2 text-white transition hover:bg-cyan-800">
            + {t("add")}
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <TeacherCard />
        </div>
      </div>
    </div>
  );
}

export default OneCourseCard;