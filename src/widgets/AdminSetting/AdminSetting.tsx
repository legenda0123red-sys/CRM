export default function AdminSettings() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Настройки
          </h1>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Управление профилем администратора и настройками аккаунта
          </p>
        </div>

        {/* Profile */}
        <section className="mb-6 rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Профиль
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Основная информация вашего аккаунта
            </p>
          </div>

          <div className="p-6">
            {/* Avatar */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-3xl font-bold text-white ring-4 ring-gray-100 dark:ring-gray-800">
                СА
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Фото профиля
                </h3>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  JPG, PNG или WEBP. Максимальный размер — 5 MB.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
                  >
                    Выбрать фото
                  </button>

                  <button
                    type="button"
                    className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>

            <div className="my-8 border-t border-gray-200 dark:border-gray-800" />

            {/* User data */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* First name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Имя
                </label>

                <input
                  type="text"
                  placeholder="Введите имя"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
                />
              </div>

              {/* Last name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Фамилия
                </label>

                <input
                  type="text"
                  placeholder="Введите фамилию"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Введите email"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Телефон
                </label>

                <input
                  type="tel"
                  placeholder="+996 ___ ___ ___"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
                />
              </div>

              {/* Role */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Роль
                </label>

                <input
                  type="text"
                  value="Administrator"
                  disabled
                  className="w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                />

                <p className="mt-2 text-xs text-gray-400">
                  Роль нельзя изменить самостоятельно
                </p>
              </div>

              {/* Position */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Должность
                </label>

                <input
                  type="text"
                  placeholder="Например: Руководитель"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="mb-6 rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Безопасность
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Настройки безопасности аккаунта
            </p>
          </div>

          <div className="space-y-4 p-6">
            {/* Password */}
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
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Изменить пароль
              </button>
            </div>

            {/* 2FA */}
            <div className="flex flex-col justify-between gap-4 rounded-xl border border-gray-200 p-5 sm:flex-row sm:items-center dark:border-gray-800">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Двухфакторная аутентификация
                </h3>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Дополнительная защита вашего аккаунта
                </p>
              </div>

              <button
                type="button"
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Настроить
              </button>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="mb-6 rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="border-b border-gray-200 px-6 py-5 dark:border-gray-800">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Уведомления
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Управление уведомлениями администратора
            </p>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {/* Students */}
            <div className="flex items-center justify-between gap-5 p-6">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Новые студенты
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Уведомления о регистрации новых студентов
                </p>
              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>

            {/* Attendance */}
            <div className="flex items-center justify-between gap-5 p-6">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Посещаемость
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Уведомления о низкой посещаемости
                </p>
              </div>

              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>

            {/* Homework */}
            <div className="flex items-center justify-between gap-5 p-6">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Домашние задания
                </p>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Уведомления о новых домашних заданиях
                </p>
              </div>

              <input
                type="checkbox"
                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
          </div>
        </section>

        {/* Buttons */}
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Отмена
          </button>

          <button
            type="button"
            className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 active:scale-[0.98]"
          >
            Сохранить изменения
          </button>
        </div>
      </div>
    </div>
  );
}
