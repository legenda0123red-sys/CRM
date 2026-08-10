import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function NotFound() {
  const { t, i18n } = useTranslation("errors");

  const changeLng = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div
      key={i18n.language}
      className="language-fade min-h-screen flex flex-col items-center justify-center gap-10">
        <div className="flex items-center bg-purple-100 rounded-lg p-1">
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

        <div className="flex flex-col items-center bg-slate-200 p-10 rounded-2xl">
          <h1 className="text-8xl font-black text-cyan-600">
            404
          </h1>

          <h2 className="text-4xl font-bold mt-4">
            {t("NotFoundPageTitle")}
          </h2>

          <p className="text-gray-500 text-center mt-3 max-w-lg">
            {t("NotFoundPageDesc")}
          </p>

          <div className="text-8xl mt-10 animate-bounce">
            🚀
          </div>

          <div className="flex gap-4 mt-10">
            <Link
              to="/dashboard"
              className="px-8 py-3 rounded-xl bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition"
            >
              🏠 {t("NotFoundDash")}
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
            >
              ← {t("NotFoundBack")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default NotFound;