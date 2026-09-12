import { useDispatch, useSelector } from "react-redux";
import { closeWindow } from "../model/createStudent";
import { useState } from "react";
import type { AppDispatch, RootState } from "../../../app/store";
import { useTranslation } from "react-i18next";
import { type CreateStudentDto } from "../../../entities/student/model/studentSlice";
import {
  createStudent,
  getStudents,
} from "../../../entities/student/api/studentApi";

function CreateStudents() {
  const { t, i18n } = useTranslation("course");
  const dispatch = useDispatch<AppDispatch>();

  const IsOpen = useSelector(
    (state: RootState) => state.createStudentReducer.Open,
  );

  const [userData, setUserData] = useState<CreateStudentDto>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    parentsPhone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ОТПРАВЛЯЕМ:", userData);

    if (
      !userData.email.trim() ||
      !userData.password.trim() ||
      !userData.firstName.trim() ||
      !userData.lastName.trim() ||
      !userData.phone.trim() ||
      !userData.parentsPhone.trim()
    ) {
      alert("Заполните все поля");
      return;
    }

    try {
      await dispatch(createStudent(userData)).unwrap();
      await dispatch(getStudents()).unwrap();
      dispatch(closeWindow());

      setUserData({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        parentsPhone: "",
      });
    } catch (error) {
      console.error("Ошибка создания студента:", error);
    }
  };

  if (!IsOpen) return null;

  return (
    <>
      <div
        key={i18n.language}
        className="language-fade fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      >
        <div className="w-100 rounded-lg bg-white p-6 dark:bg-slate-900">
          <h3 className="mb-4 text-xl font-bold dark:text-white">
            {t("CreateStudent")}
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              required
              value={userData.firstName}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  firstName: e.target.value,
                })
              }
              placeholder={t("StudentName")}
              className="rounded border p-2 dark:text-white dark:placeholder:text-white"
              type="text"
            />

            <input
              required
              value={userData.lastName}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  lastName: e.target.value,
                })
              }
              placeholder={t("StudentUsername")}
              className="rounded border p-2 dark:text-white dark:placeholder:text-white"
              type="text"
            />

            <input
              required
              value={userData.email}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  email: e.target.value,
                })
              }
              placeholder="Email"
              className="rounded border p-2 dark:text-white dark:placeholder:text-white"
              type="email"
            />

            <input
              required
              minLength={6}
              value={userData.password}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  password: e.target.value,
                })
              }
              placeholder={t("StudentPass")}
              className="rounded border p-2 dark:text-white dark:placeholder:text-white"
              type="password"
            />

            <input
              required
              value={userData.phone}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  phone: e.target.value,
                })
              }
              placeholder={t("StudentNumber")}
              className="rounded border p-2 dark:text-white dark:placeholder:text-white"
              type="text"
            />

            <input
              required
              value={userData.parentsPhone}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  parentsPhone: e.target.value,
                })
              }
              placeholder={t("StudentParentNumber")}
              className="rounded border p-2 dark:text-white dark:placeholder:text-white"
              type="text"
            />

            <button
              className="cursor-pointer rounded bg-purple-900 p-2 font-semibold text-white dark:bg-cyan-800 dark:hover:bg-cyan-700"
              type="submit"
            >
              {t("StudentCreateBtn")}
            </button>
          </form>

          <button
            onClick={() => dispatch(closeWindow())}
            className="mt-3 cursor-pointer text-gray-500 dark:text-white"
          >
            {t("StudentCloseBtn")}
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateStudents;
