import { useTranslation } from "react-i18next";
import { Dash, Grad, Chat, Settings, Teamwork } from "../../shared/icons/icons";
import { Link, useLocation } from "react-router-dom";

function DashTeacher() {
  const location = useLocation();
  const { t, i18n } = useTranslation("dashboard");

  const menu = [
    {
      title: t("MyCourses"),
      icon: Dash,
      path: "/teacher",
    },
    {
      title: t("Hw"),
      icon: Grad,
      path: "/teacher/Hw",
    },
    {
      title: t("attendance"),
      icon: Chat,
      path: "/teacher/attendance",
    },
    {
      title: t("advance"),
      icon: Teamwork,
      path: "/teacher/advance",
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
      className="language-fade sidebar fixed left-0 top-0 h-screen w-70 shrink-0 bg-purple-700 px-4 py-6 text-white dark:bg-gray-900"
    >
      <div className="sidebar__header flex items-center justify-between">
        <i className="sidebar__logo fi fi-sr-graduation-cap text-4xl text-purple-300"></i>

        <h1 className="sidebar__title text-3xl font-bold">CourseFlow</h1>
      </div>

      <div className="sidebar__menu mt-12 flex flex-col gap-5">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`
      sidebar__item
      flex
      items-center
      gap-3
      rounded-lg
      border-2
      p-2.5
      transition
      ${
        location.pathname === item.path
          ? "bg-fuchsia-600"
          : "hover:bg-purple-900"
      }
    `}
          >
            <img
              className="sidebar__icon h-10 w-10"
              src={item.icon}
              alt={item.title}
            />

            <span
              className="
        sidebar__label
        cursor-pointer
        text-2xl
        font-bold
        text-white
      "
            >
              {item.title}
            </span>
          </Link>
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
              rounded-lg
              border-2
              p-2.5
              transition
              ${
                location.pathname === item.path
                  ? "bg-fuchsia-600"
                  : "hover:bg-purple-900"
              }
            `}
          >
            <img
              className="sidebar__icon h-10 w-10"
              src={item.icon}
              alt={item.title}
            />

            <Link
              to={item.path}
              className="
                sidebar__label
                cursor-pointer
                text-2xl
                font-bold
                text-white
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

export default DashTeacher;
