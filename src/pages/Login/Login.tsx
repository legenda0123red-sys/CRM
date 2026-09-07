import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import type { IMessage } from "../../features/RegistrationForm/RegistrationForm";
import { LoginUser } from "../../features/auth/api/login";
export interface ILogin {
  email: string;
  password: string;
}
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState<ILogin>({
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
    }, 3000);
  }

  const { i18n, t } = useTranslation("auth");

  const changeLng = (lng: "ru" | "en") => {
    i18n.changeLanguage(lng);
  };

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      showMessage("Поля пустые", "red");
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

    const newUser = {
      email: user.email,
      password: user.password,
    };

    try {
    const result =  await LoginUser(newUser);

      showMessage("Успешно", "green");

      setUser({
        email: "",
        password: "",
      });

      setTimeout(() => {
        if (result.user.role === "ADMIN") {
          navigate("/dashboard");
        } else if (result.user.role === "TEACHER") {
          navigate("/teacher");
        }
      }, 1000);
    } catch (error) {
      if (error instanceof Error) {
        showMessage(error.message, "red");
      }
    }
  };

  return (
    <div
      key={i18n.language}
      className="language-fade flex min-h-screen items-center justify-center bg-linear-to-br from-violet-950 via-purple-900 to-fuchsia-900 px-4 py-8"
    >
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 shadow-xl backdrop-blur-md">
            <span className="text-3xl">🎓</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="greet">
              <h1 className="text-3xl font-bold text-white">
                {t("common.brand")}
              </h1>

              <p className="mt-2 text-sm text-purple-200">
                {t("common.description")}
              </p>
            </div>
          </div>

          <div className="mt-5 flex justify-center">
            <div className="flex items-center gap-1 rounded-xl bg-purple-100 p-1 shadow-sm">
              <button
                type="button"
                onClick={() => changeLng("ru")}
                className={`
                  cursor-pointer
                  rounded-lg px-3 py-1.5
                  text-sm font-semibold
                  transition-all duration-200
                  ${
                    i18n.language === "ru"
                      ? "bg-white text-purple-700 shadow-sm"
                      : "text-purple-400 hover:text-purple-700"
                  }
                `}
              >
                RU
              </button>

              <button
                type="button"
                onClick={() => changeLng("en")}
                className={`
                  cursor-pointer
                  rounded-lg px-3 py-1.5
                  text-sm font-semibold
                  transition-all duration-200
                  ${
                    i18n.language === "en"
                      ? "bg-white text-purple-700 shadow-sm"
                      : "text-purple-400 hover:text-purple-700"
                  }
                `}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          <div className="mb-7">
            <h2 className="text-2xl font-bold text-white">
              {t("login.title")}
            </h2>

            <p className="mt-1 text-sm text-purple-200">
              {t("login.subtitle")}
            </p>
          </div>

          <form onSubmit={handlesubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                {t("login.email")}
              </label>

              <input
                required
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
                placeholder={t("login.emailPlaceholder")}
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
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                {t("login.password")}
              </label>

              <div className="relative">
                <input
                  required
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  type={showPassword ? "text" : "password"}
                  placeholder={t("login.passwordPlaceholder")}
                  className="
                    w-full rounded-xl
                    border border-white/10
                    bg-white/10
                    px-4 py-3 pr-12
                    text-white
                    outline-none
                    placeholder:text-purple-200/50
                    transition
                    focus:border-fuchsia-400
                    focus:bg-white/15
                    focus:ring-2
                    focus:ring-fuchsia-400/20
                  "
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="
                  cursor-pointer
                    absolute right-3 top-1/2
                    -translate-y-1/2
                    text-purple-200
                    transition
                    hover:text-white
                  "
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="
                w-full
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
              "
            >
              {t("login.submit")}
            </button>

            <div className="mt-4 text-center">
              <p className="text-lg font-bold" style={{ color: message.color }}>
                {message.text}
              </p>
            </div>
          </form>

          <p className="mt-7 text-center text-sm text-purple-200">
            {t("login.noAccount")}{" "}
            <Link
              to="/registr"
              className="
                font-semibold
                text-fuchsia-300
                transition
                hover:text-fuchsia-200
              "
            >
              {t("login.register")}
            </Link>
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-purple-300">
          {t("common.copyright")}
        </p>
      </div>
    </div>
  );
};

export default Login;
