import { useMemo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CourseAdmin() {
  const { t, i18n } = useTranslation("course");
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
      <div className="ml-122 flex min-h-[20vh] items-center justify-center">
        <p
          key={i18n.language}
          className="language-fade text-center font-bold text-gray-500 dark:text-white"
        >
          {t("notFound")}
        </p>
      </div>
    );
  }

  const statusMap: Record<string, { label: string; className: string }> = {
    active: {
      label: t("statusActive"),
      className:
        "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
    },
    planned: {
      label: t("statusPlanned"),
      className:
        "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
    },
    completed: {
      label: t("statusCompleted"),
      className:
        "bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400",
    },
  };

  const levelMap: Record<string, { label: string; dot: string }> = {
    beginner: { label: "Beginner", dot: "bg-emerald-500" },
    middle: { label: "Middle", dot: "bg-amber-500" },
    advanced: { label: "Advanced", dot: "bg-rose-500" },
  };

  const formatMap: Record<string, { label: string; icon: string }> = {
    online: { label: "Online", icon: "💻" },
    offline: { label: "Offline", icon: "🏢" },
    hybrid: { label: "Hybrid", icon: "🔀" },
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {visibleCourses.map((item) => {
        const progress = item.lessons
          ? Math.round(
              (Number(item.completedLessons) / Number(item.lessons)) * 100,
            )
          : 0;

        const status = statusMap[item.status] ?? statusMap.active;
        const level = levelMap[item.level] ?? levelMap.beginner;
        const format = formatMap[item.format] ?? formatMap.online;

        return (
          <div
            key={`${item.id}-${i18n.language}`}
            className="language-fade flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-zinc-900"
          >
            <div className="flex items-center justify-between p-5 pb-0">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-100 text-sm font-bold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400">
                {item.title.slice(0, 2).toUpperCase()}
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${status.className}`}
              >
                {status.label}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">
                {t("courseLabel")}
              </span>

              <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                {item.title}
              </h2>

              <p className="mt-1 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
                {item.desc}
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl bg-slate-50 p-3 dark:bg-zinc-800/50">
                <div className="flex flex-col items-center text-center">
                  <span className="text-lg">👨‍🎓</span>
                  <strong className="mt-1 text-sm font-bold text-slate-800 dark:text-white">
                    {item.AllStudents}/{item.maxStudents}
                  </strong>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {t("students")}
                  </span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <span className="text-lg">👨‍🏫</span>
                  <strong className="mt-1 text-sm font-bold text-slate-800 dark:text-white">
                    {item.Mentors}
                  </strong>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {t("teachers")}
                  </span>
                </div>

                <div className="flex flex-col items-center text-center">
                  <span className="text-lg">📚</span>
                  <strong className="mt-1 text-sm font-bold text-slate-800 dark:text-white">
                    {item.lessons}
                  </strong>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    {t("lessons")}
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <span>📅</span>
                  <span className="text-slate-400 dark:text-slate-500">
                    {t("schedule")}
                  </span>
                  <span className="ml-auto font-semibold text-slate-800 dark:text-white">
                    {item.startDate} — {item.endDate}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <span>🕒</span>
                  <span className="text-slate-400 dark:text-slate-500">
                    {t("time")}
                  </span>
                  <span className="ml-auto font-semibold text-slate-800 dark:text-white">
                    {item.time}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <span>📆</span>
                  <span className="text-slate-400 dark:text-slate-500">
                    {t("days")}
                  </span>
                  <span className="ml-auto font-semibold text-slate-800 dark:text-white">
                    {item.days.join(" • ")}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <span className={`h-2 w-2 rounded-full ${level.dot}`} />
                  {level.label}
                </span>

                <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {format.icon} {format.label}
                </span>
              </div>

              <div className="mt-4">
                <div className="mb-1 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span>{t("progress")}</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-indigo-600 transition-all dark:bg-indigo-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1 text-sm font-bold text-slate-800 dark:text-white">
                💰 {item.price.toLocaleString("ru-RU")} {t("currency")}
              </div>

              <Link
                to={`/dashboard/course/${item.id}`}
                state={item}
                className="mt-4"
              >
                <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700 dark:bg-indigo-950 dark:shadow-none dark:hover:bg-indigo-900">
                  {t("details")}
                  <span>→</span>
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CourseAdmin;
