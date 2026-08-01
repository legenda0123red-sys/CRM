import { useState } from "react";
import { Dash } from "../../shared/icons/icons";
import { Educ } from "../../shared/icons/icons";
import { Grad } from "../../shared/icons/icons";
import { Chat } from "../../shared/icons/icons";
import { Settings } from "../../shared/icons/icons";

function DashAdmin() {
  const [active, setActive] = useState<string>("dash");
  return (
    <>
      <aside className="sidebar w-70 shrink-0 bg-purple-700 text-white py-6 px-4">
  <div className="sidebar__header flex justify-between items-center">
    <i className="sidebar__logo fi fi-sr-graduation-cap text-4xl text-purple-500"></i>
    <h1 className="sidebar__title text-3xl font-bold">CourseFlow</h1>
  </div>

  <div className="sidebar__menu mt-12.5 flex flex-col gap-5">
    <div
      className={`sidebar__item flex items-center gap-3 p-2.5 border-2 rounded-lg transition ${
        active === "dash" ? "sidebar__item--active bg-fuchsia-600" : "hover:bg-purple-900"
      }`}
    >
      <img className="sidebar__icon w-10 h-10" src={Dash} alt="" />
      <button
        onClick={() => setActive("dash")}
        className="sidebar__label text-2xl font-bold text-white cursor-pointer"
      >
        Dashboard
      </button>
    </div>

    <div
      className={`sidebar__item flex items-center gap-3 p-2.5 border-2 rounded-lg transition ${
        active === "students" ? "sidebar__item--active bg-fuchsia-600" : "hover:bg-purple-900"
      }`}
    >
      <img className="sidebar__icon w-10 h-10" src={Grad} alt="" />
      <button
        onClick={() => setActive("students")}
        className="sidebar__label text-2xl font-bold text-white cursor-pointer"
      >
        Students
      </button>
    </div>

    <div
      className={`sidebar__item flex items-center gap-3 p-2.5 border-2 rounded-lg transition ${
        active === "course" ? "sidebar__item--active bg-fuchsia-600" : "hover:bg-purple-900"
      }`}
    >
      <img className="sidebar__icon w-10 h-10" src={Educ} alt="" />
      <button
        onClick={() => setActive("course")}
        className="sidebar__label text-2xl font-bold text-white cursor-pointer"
      >
        Course
      </button>
    </div>

    <div
      className={`sidebar__item flex items-center gap-3 p-2.5 border-2 rounded-lg transition ${
        active === "chat" ? "sidebar__item--active bg-fuchsia-600" : "hover:bg-purple-900"
      }`}
    >
      <img className="sidebar__icon w-10 h-10" src={Chat} alt="" />
      <button
        onClick={() => setActive("chat")}
        className="sidebar__label text-2xl font-bold text-white cursor-pointer"
      >
        Chat
      </button>
    </div>
  </div>

  <div className="sidebar__footer mt-50">
    <div
      className={`sidebar__item flex items-center gap-3 p-2.5 border-2 rounded-lg transition ${
        active === "settings" ? "sidebar__item--active bg-fuchsia-600" : "hover:bg-purple-900"
      }`}
    >
      <img className="sidebar__icon w-10 h-10" src={Settings} alt="" />
      <button
        onClick={() => setActive("settings")}
        className="sidebar__label text-2xl font-bold text-white cursor-pointer"
      >
        Settings
      </button>
    </div>
  </div>
</aside>
    </>
  );
}
export default DashAdmin;
