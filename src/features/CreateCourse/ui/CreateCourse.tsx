import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import { closeModal, addCourse, type ICourse } from "../model/createSlice";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function CreateCourse() {
  const { t, i18n } = useTranslation("course");

  const dispatch = useDispatch<AppDispatch>();

  const isOpen = useSelector(
    (state: RootState) => state.createCourseModalReducer.isOpen,
  );

  const [database, setDataBase] = useState<ICourse>({
    title: "",
    desc: "",

    AllStudents: 0,
    maxStudents: 0,
    studentIds: [],

    Mentors: 2,

    lessons: "",
    completedLessons: 0,

    startDate: "",
    endDate: "",

    days: [],
    time: "",
    timing: "",

    level: "beginner",
    format: "online",

    room: "",

    price: 0,

    status: "planned",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(database);

    dispatch(
      addCourse({
        ...database,
        id: Date.now(),
      }),
    );

    dispatch(closeModal());

    setDataBase({
      title: "",
      desc: "",

      AllStudents: 0,
      maxStudents: 0,
      studentIds: [],

      Mentors: 2,

      lessons: "",
      completedLessons: 0,

      startDate: "",
      endDate: "",

      days: [],
      time: "",
      timing: "",

      level: "beginner",
      format: "online",

      room: "",

      price: 0,

      status: "planned",
    });
  };

  if (!isOpen) return null;

  return (
<div
  key={i18n.language}
  className="language-fade fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
>
  <div 
  className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-gray-100 bg-white p-7 shadow-2xl dark:border-slate-700 dark:bg-slate-900
  [&::-webkit-scrollbar]:w-1.5
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-slate-300
  dark:[&::-webkit-scrollbar-thumb]:bg-slate-600
  hover:[&::-webkit-scrollbar-thumb]:bg-slate-400
  dark:hover:[&::-webkit-scrollbar-thumb]:bg-slate-500"
>

    <div className="mb-6 border-b border-gray-200 pb-5 dark:border-slate-700">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {t("CreateCourse")}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
            {t("courseFormDescription")}
          </p>
        </div>

        <button
          type="button"
          onClick={() => dispatch(closeModal())}
          className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 hover:text-gray-800 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>

    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <label className="form-label">{t("courseName")}</label>
        <select
          required
          value={database.title}
          onChange={(e) => setDataBase({ ...database, title: e.target.value })}
          className="form-input"
        >
          <option value="">{t("selectCourse")}</option>
          <option value="React + TypeScript">React + TypeScript</option>
          <option value="Node.js Backend">Node.js Backend</option>
          <option value="NestJS Advanced">NestJS Advanced</option>
          <option value="Python">Python</option>
          <option value="HTML + CSS">HTML + CSS</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </div>

      <div>
        <label className="form-label">{t("CourseDesc")}</label>
        <textarea
          required
          rows={3}
          value={database.desc}
          onChange={(e) => setDataBase({ ...database, desc: e.target.value })}
          placeholder={t("CourseDesc")}
          className="form-input resize-none"
        />
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 dark:border-slate-700 dark:bg-slate-800/40">
        <div className="mb-4">
          <h4 className="font-bold text-slate-800 dark:text-white">
            {t("courseInformation")}
          </h4>
          <p className="mt-1 text-xs text-slate-400">
            {t("courseInformationDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="form-label-sm">{t("maxStudents")}</label>
            <input
              required
              min="1"
              value={database.maxStudents}
              onChange={(e) => setDataBase({ ...database, maxStudents: Number(e.target.value) })}
              type="number"
              placeholder={t("maxStudents")}
              className="form-input"
            />
          </div>

          <div>
            <label className="form-label-sm">{t("currentStudents")}</label>
            <input
              required
              min="0"
              value={database.AllStudents}
              onChange={(e) => setDataBase({ ...database, AllStudents: Number(e.target.value) })}
              type="number"
              placeholder={t("currentStudents")}
              className="form-input"
            />
          </div>

          <div>
            <label className="form-label-sm">{t("CourseLessons")}</label>
            <input
              required
              value={database.lessons}
              onChange={(e) => setDataBase({ ...database, lessons: e.target.value })}
              type="text"
              placeholder={t("CourseLessons")}
              className="form-input"
            />
          </div>

          <div>
            <label className="form-label-sm">{t("completedLessons")}</label>
            <input
              required
              min="0"
              value={database.completedLessons}
              onChange={(e) => setDataBase({ ...database, completedLessons: Number(e.target.value) })}
              type="number"
              placeholder={t("completedLessons")}
              className="form-input"
            />
          </div>

          <div>
            <label className="form-label-sm">{t("mentorsCount")}</label>
            <input
              required
              min="0"
              value={database.Mentors}
              onChange={(e) => setDataBase({ ...database, Mentors: Number(e.target.value) })}
              type="number"
              placeholder={t("mentorsCount")}
              className="form-input"
            />
          </div>

          <div>
            <label className="form-label-sm">{t("duration")}</label>
            <input
              required
              value={database.timing}
              onChange={(e) => setDataBase({ ...database, timing: e.target.value })}
              type="text"
              placeholder={t("durationExample")}
              className="form-input"
            />
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-purple-100 bg-purple-50/50 p-5 dark:border-slate-700 dark:bg-slate-800/40">
        <h4 className="mb-4 font-bold text-slate-800 dark:text-white">
          {t("schedule")}
        </h4>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="form-label-sm">{t("startDate")}</label>
            <input
              required
              value={database.startDate}
              onChange={(e) => setDataBase({ ...database, startDate: e.target.value })}
              type="date"
              className="form-input"
            />
          </div>

          <div>
            <label className="form-label-sm">{t("endDate")}</label>
            <input
              required
              min={database.startDate}
              value={database.endDate}
              onChange={(e) => setDataBase({ ...database, endDate: e.target.value })}
              type="date"
              className="form-input"
            />
          </div>

          <div>
            <label className="form-label-sm">{t("days")}</label>
            <input
              required
              value={database.days.join(", ")}
              onChange={(e) =>
                setDataBase({
                  ...database,
                  days: e.target.value.split(",").map((day) => day.trim()).filter(Boolean),
                })
              }
              type="text"
              placeholder={t("daysExample")}
              className="form-input"
            />
          </div>

          <div>
            <label className="form-label-sm">{t("courseTime")}</label>
            <input
              required
              value={database.time}
              onChange={(e) => setDataBase({ ...database, time: e.target.value })}
              type="text"
              placeholder={t("courseTimeExample")}
              className="form-input"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="form-label">{t("format")}</label>
          <select
            required
            value={database.format}
            onChange={(e) => setDataBase({ ...database, format: e.target.value as ICourse["format"] })}
            className="form-input"
          >
            <option value="online">{t("onlineFormat")}</option>
            <option value="offline">{t("offlineFormat")}</option>
            <option value="hybrid">{t("hybridFormat")}</option>
          </select>
        </div>

        <div>
          <label className="form-label">{t("courseLevel")}</label>
          <select
            required
            value={database.level}
            onChange={(e) => setDataBase({ ...database, level: e.target.value as ICourse["level"] })}
            className="form-input"
          >
            <option value="beginner">{t("beginnerLevel")}</option>
            <option value="middle">{t("middleLevel")}</option>
            <option value="advanced">{t("advancedLevel")}</option>
          </select>
        </div>

        <div>
          <label className="form-label">{t("roomOrOnlineLink")}</label>
          <input
            value={database.room}
            onChange={(e) => setDataBase({ ...database, room: e.target.value })}
            type="text"
            placeholder={t("roomOrOnlineLink")}
            className="form-input"
          />
        </div>

        <div>
          <label className="form-label">{t("coursePrice")}</label>
          <input
            required
            value={database.price}
            onChange={(e) => setDataBase({ ...database, price: Number(e.target.value) })}
            type="text"
            placeholder={t("coursePrice")}
            className="form-input"
          />
        </div>

        <div className="md:col-span-2">
          <label className="form-label">{t("courseStatus")}</label>
          <select
            required
            value={database.status}
            onChange={(e) => setDataBase({ ...database, status: e.target.value as ICourse["status"] })}
            className="form-input"
          >
            <option value="planned">{t("plannedStatus")}</option>
            <option value="active">{t("activeStatus")}</option>
            <option value="completed">{t("completedStatus")}</option>
          </select>
        </div>
      </div>

      <div className="flex gap-3 border-t border-slate-200 pt-5 dark:border-slate-700">
        <button
          type="submit"
          className="flex-1 cursor-pointer rounded-xl bg-purple-700 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-0.5 hover:bg-purple-800 dark:bg-cyan-700 dark:shadow-cyan-900/20 dark:hover:bg-cyan-600"
        >
          {t("StudentCreateBtn")}
        </button>

        <button
          type="button"
          onClick={() => dispatch(closeModal())}
          className="cursor-pointer rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        >
          {t("StudentCloseBtn")}
        </button>
      </div>
    </form>
  </div>
</div>
  );
}

export default CreateCourse;
