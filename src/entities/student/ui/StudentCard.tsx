import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { AppDispatch, RootState } from "../../../app/store";
import { getStudents } from "../api/studentApi";

function StudentsCard() {
  const { t, i18n } = useTranslation("course");
  const dispatch = useDispatch<AppDispatch>();

  const { students, loading, error } = useSelector(
    (state: RootState) => state.studentReducer,
  );

  const searchStudents = useSelector(
    (state: RootState) => state.searchStudentsReducer.search,
  );

  const findStudents = useMemo(() => {
  const query = searchStudents.trim().toLowerCase();

  if (!query) return students;

  return students.filter((student) => {
    const fullName =
      `${student.user.firstName} ${student.user.lastName}`.toLowerCase();

    return fullName.includes(query);
  });
}, [students, searchStudents]);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex  justify-center pt-[20vh] ml-128">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600 dark:border-slate-700 dark:border-t-indigo-400"></div>

          <p className="font-semibold text-slate-500 dark:text-slate-300 text-center">
            Загрузка студентов...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex  justify-center pt-[20vh] ml-128">
        <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-center dark:border-red-900/50 dark:bg-red-950/30">
          <p className="font-semibold text-red-600 dark:text-red-400">
            {error}
          </p>
        </div>
      </div>
    );
  }

  if (findStudents.length === 0) {
    return (
      <div className="flex  justify-center pt-[20vh] ml-128">
        <p className="language-fade font-bold text-gray-500 dark:text-white ">
          {t("NotFoundStudents")}
        </p>
      </div>
    );
  }

  return (
    <div key={i18n.language} className="language-fade flex flex-wrap gap-5">
      {findStudents.slice(0, 10).map((item) => {
        const firstName = item.user.firstName;
        const lastName = item.user.lastName;

        return (
          <div
            key={item.id}
            className="w-70 rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:border-gray-700 dark:bg-zinc-700 dark:hover:shadow-cyan-900"
          >
            <div className="relative h-28 rounded-lg bg-linear-to-r from-indigo-500 to-purple-600">
              <div className="absolute -bottom-10 left-6">
                <div className="h-20 w-20 rounded-full bg-white p-1 shadow-lg">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-linear-to-r from-cyan-400 to-blue-600 text-2xl font-bold text-white">
                    {firstName[0].toUpperCase()}
                    {lastName[0].toUpperCase()}
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-14">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                    {firstName} {lastName}
                  </h2>

                  <p className="text-sm text-gray-400 dark:text-gray-300">
                    @{item.username}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.user.isBlocked
                      ? "bg-red-100 text-red-600 dark:bg-red-700 dark:text-white"
                      : "bg-green-100 text-green-600 dark:bg-green-700 dark:text-white"
                  }`}
                >
                  {item.user.isBlocked ? "Blocked" : "Active"}
                </span>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100">
                    📧
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 dark:text-white">
                      Email
                    </p>

                    <p className="font-medium text-gray-700 dark:text-white">
                      {item.user.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100">
                    📱
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 dark:text-white">
                      {t("phone")}
                    </p>

                    <p className="font-medium text-gray-700 dark:text-white">
                      +{item.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
                    👨‍👩‍👦
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 dark:text-white">
                      {t("ParentsPhone")}
                    </p>

                    <p className="font-medium text-gray-700 dark:text-white">
                      +{item.parentsPhone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100">
                    🎓
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 dark:text-white">
                      {t("Course")}
                    </p>

                    <p className="font-medium text-gray-700 dark:text-white">
                      {item.courses.length > 0
                        ? item.courses.join(", ")
                        : "Нет курса"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StudentsCard;
