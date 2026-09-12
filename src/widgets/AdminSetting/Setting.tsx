import { useEffect, useState } from "react";
import { GetProfile } from "../../features/auth/api/profile";
import { useNavigate } from "react-router-dom";

interface UserProfile {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  isBlocked: boolean;
  student: {
    id: number;
    phone: string;
    parentsPhone: string;
    courses: string[];
    here: boolean;
  } | null;
}

export default function AdminSettings() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigation("/login");
  };
  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await GetProfile();
        setUser(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
        <p className="text-gray-500 dark:text-gray-400">Загрузка профиля...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-950">
        <p className="text-red-500">Не удалось загрузить профиль</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Настройки
          </h1>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Управление профилем и безопасностью аккаунта
          </p>
        </div>

        <section className="mb-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Профиль
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Информация о вашем аккаунте
            </p>
          </div>

          <div className="p-6">
            <div className="mb-8 flex items-center gap-5">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-purple-600 text-2xl font-bold text-white ring-4 ring-gray-100 dark:ring-gray-800">
                {user.firstName.charAt(0).toUpperCase()}
                {user.lastName.charAt(0).toUpperCase()}
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-lg font-semibold text-gray-900 dark:text-white">
                  {user.firstName} {user.lastName}
                </h3>

                <p className="mt-1 truncate text-sm text-gray-500 dark:text-gray-400">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8 dark:border-gray-800">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Имя
                  </label>

                  <input
                    type="text"
                    value={user.firstName}
                    readOnly
                    className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-sm text-gray-900 outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Фамилия
                  </label>

                  <input
                    type="text"
                    value={user.lastName}
                    readOnly
                    className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-sm text-gray-900 outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>

                  <input
                    type="email"
                    value={user.email}
                    readOnly
                    className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-sm text-gray-900 outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Телефон
                  </label>

                  <input
                    type="tel"
                    value={user.student?.phone ?? "Не указан"}
                    readOnly
                    className="w-full rounded-xl border border-gray-300 bg-gray-100 px-4 py-3 text-sm text-gray-900 outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Роль
                  </label>

                  <input
                    type="text"
                    value={user.role}
                    disabled
                    className="w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                  />

                  <p className="mt-2 text-xs text-gray-400">
                    Роль нельзя изменить самостоятельно
                  </p>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Статус аккаунта
                  </label>

                  <input
                    type="text"
                    value={user.isBlocked ? "Заблокирован" : "Активен"}
                    disabled
                    className="w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Безопасность
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Управление безопасностью аккаунта
            </p>
          </div>

          <div className="p-6">
            <div className="flex flex-col justify-between gap-4 rounded-xl border border-gray-200 p-5 sm:flex-row sm:items-center dark:border-gray-800">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Пароль
                </h3>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Измените пароль для защиты аккаунта
                </p>
              </div>

              <button
                type="button"
                className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Изменить пароль
              </button>
            </div>
          </div>
        </section>
        <div className="mt-6 rounded-2xl border border-red-200 bg-white p-6 shadow-sm dark:border-red-900/50 dark:bg-gray-900">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">
                Выход из аккаунта
              </h2>

              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                Вы выйдете из текущего аккаунта на этом устройстве
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
            >
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
