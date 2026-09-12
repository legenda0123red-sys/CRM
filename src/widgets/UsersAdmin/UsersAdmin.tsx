import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "../../app/store";

import {
  deleteStudents,
  getStudents,
  toggleStudentBlock,
} from "../../entities/student/api/studentApi";

export default function UsersAdmin() {
  const dispatch = useDispatch<AppDispatch>();

  const { students, loading, error } = useSelector(
    (state: RootState) => state.studentReducer,
  );

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  const filteredStudents = students.filter((student) =>
    `${student.user?.firstName ?? ""} ${student.user?.lastName ?? ""}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const activeStudents = students.filter(
    (student) => !student.user.isBlocked,
  ).length;

  const blockedStudents = students.filter(
    (student) => student.user.isBlocked,
  ).length;

  const handleBlock = async (id: number, isBlocked: boolean) => {
    await dispatch(
      toggleStudentBlock({
        id,
        isBlocked,
      }),
    ).unwrap();

    setOpenMenu(null);

    await dispatch(getStudents()).unwrap();
  };

  const handleDelete = async () => {
    if (deleteId === null) {
      return;
    }

    await dispatch(deleteStudents(deleteId)).unwrap();

    setDeleteId(null);
    setOpenMenu(null);
  };

  if (loading && students.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 dark:bg-gray-950 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex min-h-125 items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-purple-600" />

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Загрузка студентов...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 dark:bg-gray-950 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Пользователи
            </h1>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Управление аккаунтами студентов
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </div>
        )}

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Всего студентов
            </p>

            <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
              {students.length}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm text-gray-500 dark:text-gray-400">Активные</p>

            <p className="mt-2 text-2xl font-bold text-green-600">
              {activeStudents}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Заблокированные
            </p>

            <p className="mt-2 text-2xl font-bold text-red-500">
              {blockedStudents}
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex flex-col gap-4 border-b border-gray-200 p-5 dark:border-gray-800 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">
                Все студенты
              </h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {filteredStudents.length} пользователей
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative w-full sm:w-80">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  🔍
                </span>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Поиск студента..."
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
                />
              </div>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-purple-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                <option value="all">Все статусы</option>
                <option value="active">Активные</option>
                <option value="blocked">Заблокированные</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-225">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50 text-left dark:border-gray-800 dark:bg-gray-800/50">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Студент
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Username
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Email
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Телефон
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Статус
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Действия
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.map((student) => {
                  const fullName = `${student.user.firstName} ${student.user.lastName}`;

                  return (
                    <tr
                      key={student.id}
                      className="border-b border-gray-100 transition hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800/40"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-purple-100 font-semibold text-purple-600 dark:bg-purple-900/40 dark:text-purple-400">
                            {student.user.firstName[0]}
                            {student.user.lastName[0]}
                          </div>

                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {fullName}
                            </p>

                            <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                              ID: {student.id}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600 dark:text-gray-300">
                        @{student.username}
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600 dark:text-gray-300">
                        {student.user.email}
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600 dark:text-gray-300">
                        {student.phone}
                      </td>

                      <td className="px-6 py-5">
                        {student.user.isBlocked ? (
                          <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-medium text-red-600 dark:bg-red-900/20 dark:text-red-400">
                            <span className="h-2 w-2 rounded-full bg-red-500" />
                            Заблокирован
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-600 dark:bg-green-900/20 dark:text-green-400">
                            <span className="h-2 w-2 rounded-full bg-green-500" />
                            Активен
                          </span>
                        )}
                      </td>

                      <td className="relative px-6 py-5">
                        <div className="flex justify-end">
                          <button
                            type="button"
                            onClick={() =>
                              setOpenMenu(
                                openMenu === student.id ? null : student.id,
                              )
                            }
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                          >
                            ⋮
                          </button>

                          {openMenu === student.id && (
                            <div className="absolute right-6 top-16 z-30 w-52 rounded-xl border border-gray-200 bg-white p-1.5 shadow-xl dark:border-gray-700 dark:bg-gray-800">
                              <button
                                onClick={() =>
                                  handleBlock(
                                    student.id,
                                    !student.user.isBlocked,
                                  )
                                }
                                className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                              >
                                {student.user.isBlocked
                                  ? "Разблокировать"
                                  : "Заблокировать"}
                              </button>

                              <div className="my-1 border-t border-gray-100 dark:border-gray-700" />

                              <button
                                type="button"
                                onClick={() => setDeleteId(student.id)}
                                className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-red-600 transition hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                              >
                                Удалить
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {filteredStudents.length === 0 && (
            <div className="px-6 py-16 text-center">
              <div className="mb-3 text-4xl">👤</div>

              <h3 className="font-semibold text-gray-900 dark:text-white">
                Студенты не найдены
              </h3>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Попробуйте изменить поисковый запрос или фильтр
              </p>
            </div>
          )}
        </div>
      </div>

      {deleteId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-900">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Удалить студента?
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Вы действительно хотите удалить этого студента? Его аккаунт также
              будет удалён.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeleteId(null)}
                className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Отмена
              </button>

              <button
                type="button"
                onClick={handleDelete}
                disabled={loading}
                className="rounded-xl bg-red-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Удаление..." : "Удалить"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
