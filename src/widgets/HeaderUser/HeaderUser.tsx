import { useTranslation } from "react-i18next";
import { Theme } from "../../features/Theme";
import "./HeaderUser.scss";
import { Link } from "react-router-dom";

function HeaderUser() {
  const { i18n } = useTranslation("course");

  const changeLng = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div key={i18n.language} className="header language-fade">
      <div className="header__admin">
        <img src="https://i.pravatar.cc/150?img=12" alt="Admin avatar" />
      </div>

      <div className="header__language">
        <button
          type="button"
          onClick={() => changeLng("ru")}
          className={i18n.language === "ru" ? "active" : ""}
        >
          RU
        </button>

        <button
          type="button"
          onClick={() => changeLng("en")}
          className={i18n.language === "en" ? "active" : ""}
        >
          EN
        </button>
      </div>
      

      <div className="header__theme">
        <Theme />
        <Link to='/dashboard'>Admin</Link>
      </div>
    </div>
  );
}

export default HeaderUser;
