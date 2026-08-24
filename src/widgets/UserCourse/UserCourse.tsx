import "./UserCourse.scss";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import type { ICourse } from "../../features/CreateCourse/model/createSlice";

function UserCourse() {
  const courses: ICourse[] = useSelector(
    (state: RootState) => state.createCourseModalReducer.base,
  );

  if (courses.length === 0) {
    return (
      <div className="course-card__empty">
        <h2>Курсов пока нет</h2>
        <p>Здесь будут отображаться ваши курсы</p>
      </div>
    );
  }

  return (
   <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
  {courses.map((course) => {
    const progress = course.lessons
      ? Math.round((Number(course.completedLessons) / Number(course.lessons)) * 100)
      : 0;

    const statusMap: Record<string, { label: string; className: string }> = {
      active: { label: "Активный", className: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" },
      planned: { label: "Запланирован", className: "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400" },
      completed: { label: "Завершён", className: "bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400" },
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

    const status = statusMap[course.status] ?? statusMap.active;
    const level = levelMap[course.level] ?? levelMap.beginner;
    const format = formatMap[course.format] ?? formatMap.online;

    return (
      <article
        key={course.title}
        className="flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
      >
        <div className="flex items-center justify-between p-5 pb-0">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-100 text-sm font-bold text-purple-700 dark:bg-cyan-500/10 dark:text-cyan-400">
            {course.title.slice(0, 2).toUpperCase()}
          </div>

          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${status.className}`}>
            {status.label}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <span className="text-[11px] font-bold uppercase tracking-wider text-purple-500 dark:text-cyan-400">
            КУРС
          </span>

          <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
            {course.title}
          </h2>

          <p className="mt-1 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
            {course.desc}
          </p>

          <div className="mt-4 grid grid-cols-3 gap-2 rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/50">
            <div className="flex flex-col items-center text-center">
              <span className="text-lg">👨‍🎓</span>
              <strong className="mt-1 text-sm font-bold text-slate-800 dark:text-white">
                {course.AllStudents}/{course.maxStudents}
              </strong>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Студентов</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="text-lg">👨‍🏫</span>
              <strong className="mt-1 text-sm font-bold text-slate-800 dark:text-white">
                {course.Mentors}
              </strong>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Менторов</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <span className="text-lg">📚</span>
              <strong className="mt-1 text-sm font-bold text-slate-800 dark:text-white">
                {course.lessons}
              </strong>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Уроков</span>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <span>📅</span>
              <span className="text-slate-400 dark:text-slate-500">Начало курса</span>
              <span className="ml-auto font-semibold text-slate-800 dark:text-white">
                {course.startDate} — {course.endDate}
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <span>🕐</span>
              <span className="text-slate-400 dark:text-slate-500">Время</span>
              <span className="ml-auto font-semibold text-slate-800 dark:text-white">
                {course.time}
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <span>📆</span>
              <span className="text-slate-400 dark:text-slate-500">Дни</span>
              <span className="ml-auto font-semibold text-slate-800 dark:text-white">
                {course.days.join(" • ")}
              </span>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
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
              <span>Прогресс</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className="h-full rounded-full bg-purple-600 transition-all dark:bg-cyan-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-1 text-sm font-bold text-slate-800 dark:text-white">
            💰 {course.price.toLocaleString("ru-RU")} сом
          </div>

          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-purple-800 dark:bg-cyan-700 dark:shadow-cyan-900/20 dark:hover:bg-cyan-600">
            Открыть курс
            <span>→</span>
          </button>
        </div>
      </article>
    );
  })}
</div>
  );
}

export default UserCourse;
