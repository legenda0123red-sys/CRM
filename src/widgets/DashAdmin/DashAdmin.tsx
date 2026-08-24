import { useTranslation } from "react-i18next";
import { Dash, Grad, Chat, Settings, Teamwork } from "../../shared/icons/icons";
import { Link, useLocation } from "react-router-dom";

function DashAdmin() {
  const location = useLocation();
  const { t, i18n } = useTranslation("dashboard");

  const menu = [
    {
      title: t("dashboard"),
      icon: Dash,
      path: "/dashboard",
    },
    {
      title: t("students"),
      icon: Grad,
      path: "/students",
    },
    {
      title: t("user"),
      icon: Chat,
      path: "/users",
    },
    {
      title: t("employees"),
      icon: Teamwork,
      path: "/employees",
    },
  ];

  const footerMenu = [
    {
      title: t("settings"),
      icon: Settings,
      path: "/settings",
    },
  ];

  return (
    <aside
      key={i18n.language}
      className="language-fade sidebar fixed left-0 top-0 h-screen w-70 shrink-0 bg-purple-700 text-white py-6 px-4 dark:bg-gray-900"
    >
      <div className="sidebar__header flex justify-between items-center">
        <i className="sidebar__logo fi fi-sr-graduation-cap text-4xl text-purple-300"></i>

        <h1 className="sidebar__title text-3xl font-bold">CourseFlow</h1>
      </div>

      <div className="sidebar__menu mt-12 flex flex-col gap-5">
        {menu.map((item) => (
          <div
            key={item.path}
            className={`
              sidebar__item 
              flex 
              items-center 
              gap-3 
              p-2.5 
              border-2 
              rounded-lg 
              transition
              ${
                location.pathname === item.path
                  ? "bg-fuchsia-600"
                  : "hover:bg-purple-900"
              }
            `}
          >
            <img
              className="sidebar__icon w-10 h-10"
              src={item.icon}
              alt={item.title}
            />

            <Link
              to={item.path}
              className="
                sidebar__label 
                text-2xl 
                font-bold 
                text-white 
                cursor-pointer
              "
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>

      <div className="sidebar__footer mt-50">
        {footerMenu.map((item) => (
          <div
            key={item.path}
            className={`
              sidebar__item 
              flex 
              items-center 
              gap-3 
              p-2.5 
              border-2 
              rounded-lg 
              transition
              ${
                location.pathname === item.path
                  ? "bg-fuchsia-600"
                  : "hover:bg-purple-900"
              }
            `}
          >
            <img
              className="sidebar__icon w-10 h-10"
              src={item.icon}
              alt={item.title}
            />

            <Link
              to={item.path}
              className="
                sidebar__label 
                text-2xl 
                font-bold 
                text-white 
                cursor-pointer
              "
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default DashAdmin;
