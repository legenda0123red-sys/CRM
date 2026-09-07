import { useEffect, useState } from "react";
import "./TeacherAtten.scss";
import { useTranslation } from "react-i18next";
import {
  getStudents,
  updateStudent,
} from "../../entities/student/api/studentApi";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";

function TeacherAtten() {
  const dispatch = useDispatch<AppDispatch>();

  const students = useSelector(
    (state: RootState) => state.studentReducer.students,
  );

  const [date, setDate] = useState("2026-09-03");
  const [loading, setLoading] = useState(false);

  const { i18n, t } = useTranslation("attendance");

  useEffect(() => {
    dispatch(getStudents());
  }, [dispatch]);

  const toggleAttendance = async (
    studentId: number | undefined,
    currentHere: boolean,
  ) => {
    if (studentId === undefined) return;

    try {
      setLoading(true);

      await updateStudent(studentId, !currentHere);

      dispatch(getStudents());
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const presentCount = students.filter(
    (student) => student.here,
  ).length;

  const absentCount = students.length - presentCount;

  return (
    <div
      key={i18n.language}
      className="
        language-fade
        attendance
        dark:bg-[#0f0d14]!
        dark:text-gray-100!
      "
    >
      <div className="attendance-header">
        <div>
          <h2 className="attendance-header__title dark:text-white!">
            {t("title")}
          </h2>

          <p className="attendance-header__desc dark:text-gray-400!">
            {t("description")}
          </p>
        </div>
      </div>

      <div
        className="
          attendance-data
          dark:bg-[#18151f]!
          dark:border-[#302a3a]!
        "
      >
        <div className="attendance-data__item">
          <span className="dark:text-gray-400!">
            {t("lesson")}
          </span>

          <p className="dark:text-white!">
            React
          </p>
        </div>

        <div className="attendance-data__item">
          <span className="dark:text-gray-400!">
            {t("date")}
          </span>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="
              dark:bg-[#211d2b]!
              dark:text-white!
              dark:border-[#3a3347]!
              dark:scheme:dark
            "
          />
        </div>
      </div>

      <div
        className="
          attendance-board
          dark:bg-[#18151f]!
          dark:border-[#302a3a]!
        "
      >
        <div
          className="
            attendance-board__stats
            dark:border-[#302a3a]!
          "
        >
          <div
            className="
              attendance-board__stat
              dark:border-[#302a3a]!
            "
          >
            <span className="dark:text-white!">
              {students.length}
            </span>

            <p className="dark:text-gray-400!">
              {t("totalStudents")}
            </p>
          </div>

          <div
            className="
              attendance-board__stat
              dark:border-[#302a3a]!
            "
          >
            <span className="dark:text-green-400!">
              {presentCount}
            </span>

            <p className="dark:text-gray-400!">
              {t("present")}
            </p>
          </div>

          <div
            className="
              attendance-board__stat
              dark:border-[#302a3a]!
            "
          >
            <span className="dark:text-red-400!">
              {absentCount}
            </span>

            <p className="dark:text-gray-400!">
              {t("absent")}
            </p>
          </div>
        </div>

        <div className="attendance-many">
          <div>
            <h2
              className="
                attendance-many__students
                dark:text-white!
              "
            >
              {t("students")}
            </h2>

            <p
              className="
                attendance-many__data
                dark:text-gray-400!
              "
            >
              {t("studentsCount", {
                count: students.length,
              })}
            </p>
          </div>
        </div>

        <div
          className="
            attendance-list
            dark:bg-[#18151f]!
            dark:border-[#302a3a]!
          "
        >
          <div
            className="
              attendance-list__header
              dark:bg-[#211d2b]!
              dark:border-[#302a3a]!
            "
          >
            <p className="dark:text-gray-400!">
              {t("student")}
            </p>

            <p className="dark:text-gray-400!">
              {t("status")}
            </p>
          </div>

          {students.length === 0 ? (
            <div className="flex justify-center py-10">
              <p className="dark:text-gray-400!">
                Студентов нет
              </p>
            </div>
          ) : (
            students.map((student) => {
              const isPresent = student.here;

              return (
                <div
                  className="
                    attendance-student
                    dark:border-[#302a3a]!
                    dark:hover:bg-[#211d2b]!
                  "
                  key={student.id}
                >
                  <div className="attendance-student__info">
                    <div
                      className="
                        attendance-student__avatar
                        dark:bg-[#30283d]!
                        dark:text-white!
                      "
                    >
                      {student.name
                        .slice(0, 1)
                        .toUpperCase()}
                    </div>

                    <p className="dark:text-white!">
                      {student.name}
                    </p>
                  </div>

                  <button
                    type="button"
                    disabled={loading}
                    className={`
                      attendance-student__button
                      ${
                        isPresent
                          ? "attendance-student__button--present dark:bg-[#12351f]! dark:text-[#4ade80]!"
                          : "attendance-student__button--absent dark:bg-[#3b1818]! dark:text-[#f87171]!"
                      }
                    `}
                    onClick={() =>
                      toggleAttendance(
                        student.id,
                        student.here,
                      )
                    }
                  >
                    <span>
                      {isPresent ? "✅" : "❌"}
                    </span>

                    {isPresent
                      ? t("presentStatus")
                      : t("absentStatus")}
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default TeacherAtten;