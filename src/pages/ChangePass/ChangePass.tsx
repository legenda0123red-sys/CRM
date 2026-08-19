import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ForgotPassword() {
  const { t, i18n } = useTranslation("forgot");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Email:", email);
  };

  function changeLng(lng: string) {
    i18n.changeLanguage(lng);
  }

  return (
    <div
      key={i18n.language}
      className="language-fade flex min-h-screen items-center justify-center bg-linear-to-br from-violet-950 via-purple-900 to-fuchsia-900 px-4 py-8"
    >
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 shadow-xl backdrop-blur-md">
            <span className="text-3xl">🔐</span>
          </div>

          <h1 className="text-3xl font-bold text-white">{t("title")}</h1>

          <p className="mt-2 text-sm text-purple-200">{t("subtitle")}</p>

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
              {t("formTitle")}
            </h2>

            <p className="mt-1 text-sm text-purple-200">
              {t("formSubtitle")}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                {t("email")}
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("emailPlaceholder")}
                required
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

            <button
              type="submit"
              className="
                w-full
                cursor-pointer
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
              {t("submit")}
            </button>
          </form>

          <div className="mt-7 text-center">
            <Link
              to="/login"
              className="
                text-sm
                font-semibold
                text-fuchsia-300
                transition
                hover:text-fuchsia-200
              "
            >
              ← {t("backToLogin")}
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-purple-300">
          {t("copyright")}
        </p>
      </div>
    </div>
  );
}
