import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import { closeAdmin } from "../model/adminSlice";
import { useState } from "react";
import type {
  IMessage,
  RegistrData,
} from "../../RegistrationForm/RegistrationForm";
import { createAdmin } from "../../../entities/admin/api/adminApi";

function CreateAdmin() {
  const [user, setUser] = useState<RegistrData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState<IMessage>({
    text: "",
    color: "",
  });
  function showMessage(text: string, color: string) {
    setMessage({ text, color });
    setTimeout(() => {
      setMessage({ text: "", color: "" });
    }, 2000);
  }
  const { i18n, t } = useTranslation("auth");
  const isOpen = useSelector(
    (state: RootState) => state.CreateAdminReducer.isOpen,
  );
  const dispatch = useDispatch<AppDispatch>();
  if (!isOpen) return null;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !user.firstName ||
      !user.email ||
      !user.password ||
      !user.confirmPassword ||
      !user.lastName
    ) {
      showMessage("Ошибка, поля пустые", "red");
      return;
    }

    if (!user.email.includes("@")) {
      showMessage("Ошибка, ты забыл написать @", "red");
      return;
    }

    if (user.password.length < 8) {
      showMessage("Ошибка, пароль должен содержать минимум 8 символов", "red");
      return;
    }

    if (user.password !== user.confirmPassword) {
      showMessage("Ошибка, пароли не совпадают", "red");
      return;
    }

    const newUser: RegistrData = {
      firstName:
        user.firstName.trim()[0].toUpperCase() + user.firstName.trim().slice(1),
      lastName:
        user.lastName.trim()[0].toUpperCase() + user.lastName.trim().slice(1),
      email: user.email,
      password: user.password,
    };
    try {
      await createAdmin(newUser);

      setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      showMessage("Succesfull!", "green");
      dispatch(closeAdmin());
    } catch (error) {
      if (error instanceof Error) {
        showMessage(error.message, "red");
      } else {
        showMessage("Ошибка создания Admin", "red");
      }
    }
  };
  return (
    <div
      key={i18n.language}
      className="
        language-fade
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/50
        px-4
        backdrop-blur-sm
        dark:bg-black/70
      "
    >
      <div
        className="
          w-full max-w-md
          rounded-3xl
          border border-white/10
          bg-white/10
          shadow-2xl
          backdrop-blur-xl

          dark:border-white/10
          dark:bg-[#18151f]/95
          dark:shadow-black/50
        "
      >
        <div
          className="
            flex items-center justify-between
            border-b border-white/10
            px-6 py-5

            dark:border-white/10
          "
        >
          <div>
            <h2
              className="
                text-2xl font-bold text-white
                dark:text-white
              "
            >
              {t("register.CreateAdmin")}
            </h2>

            <p
              className="
                mt-1 text-sm text-purple-200
                dark:text-purple-300
              "
            >
              {t("register.NewAdmin")}
            </p>
          </div>

          <button
            onClick={() => dispatch(closeAdmin())}
            type="button"
            className="
              flex h-9 w-9
              cursor-pointer
              items-center justify-center
              rounded-xl
              bg-white/10
              text-xl
              text-purple-200
              transition

              hover:bg-white/20
              hover:text-white

              dark:bg-white/5
              dark:text-purple-300
              dark:hover:bg-white/10
              dark:hover:text-white
            "
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <div>
            <label
              className="
                mb-2 block
                text-sm font-medium
                text-white

                dark:text-gray-100
              "
            >
              {t("register.name")}
            </label>

            <input
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              required
              type="text"
              placeholder={t("register.namePlaceholder")}
              className="
                w-full rounded-xl
                border border-white/10
                bg-white/10
                px-4 py-3
                text-white
                outline-none
                placeholder:text-purple-200/50
                transition

                focus:border-fuchsia-400
                focus:bg-white/15
                focus:ring-2
                focus:ring-fuchsia-400/20

                dark:border-white/10
                dark:bg-white/5
                dark:text-gray-100
                dark:placeholder:text-gray-500
                dark:focus:border-fuchsia-500
                dark:focus:bg-white/10
                dark:focus:ring-fuchsia-500/20
              "
            />
          </div>

          <div>
            <label
              className="
                mb-2 block
                text-sm font-medium
                text-white

                dark:text-gray-100
              "
            >
              {t("register.username")}
            </label>

            <input
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              required
              type="text"
              placeholder={t("register.usernamePlaceholder")}
              className="
                w-full rounded-xl
                border border-white/10
                bg-white/10
                px-4 py-3
                text-white
                outline-none
                placeholder:text-purple-200/50
                transition

                focus:border-fuchsia-400
                focus:bg-white/15
                focus:ring-2
                focus:ring-fuchsia-400/20

                dark:border-white/10
                dark:bg-white/5
                dark:text-gray-100
                dark:placeholder:text-gray-500
                dark:focus:border-fuchsia-500
                dark:focus:bg-white/10
                dark:focus:ring-fuchsia-500/20
              "
            />
          </div>

          <div>
            <label
              className="
                mb-2 block
                text-sm font-medium
                text-white

                dark:text-gray-100
              "
            >
              {t("register.email")}
            </label>

            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
              type="email"
              placeholder={t("register.emailPlaceholder")}
              className="
                w-full rounded-xl
                border border-white/10
                bg-white/10
                px-4 py-3
                text-white
                outline-none
                placeholder:text-purple-200/50
                transition

                focus:border-fuchsia-400
                focus:bg-white/15
                focus:ring-2
                focus:ring-fuchsia-400/20

                dark:border-white/10
                dark:bg-white/5
                dark:text-gray-100
                dark:placeholder:text-gray-500
                dark:focus:border-fuchsia-500
                dark:focus:bg-white/10
                dark:focus:ring-fuchsia-500/20
              "
            />
          </div>

          <div>
            <label
              className="
                mb-2 block
                text-sm font-medium
                text-white

                dark:text-gray-100
              "
            >
              {t("register.password")}
            </label>

            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
              type="password"
              placeholder={t("register.passwordPlaceholder")}
              className="
                w-full rounded-xl
                border border-white/10
                bg-white/10
                px-4 py-3
                text-white
                outline-none
                placeholder:text-purple-200/50
                transition

                focus:border-fuchsia-400
                focus:bg-white/15
                focus:ring-2
                focus:ring-fuchsia-400/20

                dark:border-white/10
                dark:bg-white/5
                dark:text-gray-100
                dark:placeholder:text-gray-500
                dark:focus:border-fuchsia-500
                dark:focus:bg-white/10
                dark:focus:ring-fuchsia-500/20
              "
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => dispatch(closeAdmin())}
              type="button"
              className="
                flex-1
                rounded-xl
                border border-white/10
                bg-white/5
                px-4 py-3
                font-semibold
                text-white
                transition

                hover:bg-white/10

                dark:border-white/10
                dark:bg-white/5
                dark:text-gray-200
                dark:hover:bg-white/10
              "
            >
              {t("register.AdminCancel")}
            </button>

            <button
              type="submit"
              className="
                flex-1
                rounded-xl
                bg-linear-to-r
                from-violet-500
                to-fuchsia-500
                px-4 py-3
                font-semibold
                text-white
                shadow-lg
                shadow-fuchsia-900/30
                transition

                hover:scale-[1.01]
                hover:from-violet-400
                hover:to-fuchsia-400
                active:scale-[0.99]

                dark:from-violet-600
                dark:to-fuchsia-600
                dark:shadow-fuchsia-950/50
                dark:hover:from-violet-500
                dark:hover:to-fuchsia-500
              "
            >
              {t("register.CreateAdmin")}
            </button>
          </div>
          <p
            className="text-lg font-semibold text-center"
            style={{ color: message.color }}
          >
            {message.text}
          </p>
        </form>
      </div>
    </div>
  );
}

export default CreateAdmin;
