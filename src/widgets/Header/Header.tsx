import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function Header() {
  const { t, i18n } = useTranslation("course");
  const changeLng = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <div className="flex items-center justify-end gap-5 w-full">
        <div className="header__admin flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-purple-100 ring-2 ring-purple-200">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Admin avatar"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="cursor-pointer flex items-center gap-3">
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
        <div 
        key={i18n.language}
        className="language-fade flex gap-6"
        >
          <Link
            to="/registr"
            className=" px-5 py-2 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
          >
            {t("Registr")}
          </Link>
          <Link
            to="/login"
            className=" px-5 py-2 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-600 transition"
          >
            {t("Login")}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
<div className="header__admin bg-white w-10 h-10 rounded-full "></div>;
