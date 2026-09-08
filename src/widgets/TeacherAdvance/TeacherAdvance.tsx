import { useTranslation } from "react-i18next";
import "./TeacherAdvance.scss";

function TeacherAdvance() {
  const { i18n, t } = useTranslation("advance");

  return (
    <div
      key={i18n.language}
      className="
        language-fade
        progress
        dark:bg-[#0f0d14]!
        dark:text-gray-100!
      "
    >
      <div className="progress-header">
        <div>
          <h2
            className="
              progress-header__title
              dark:text-white!
            "
          >
            {t("title")}
          </h2>

          <p
            className="
              progress-header__desc
              dark:text-gray-400!
            "
          >
            {t("description")}
          </p>
        </div>
      </div>

      <div className="progress-course">
        <h2 className="progress-course__title dark:text-white!">
          {t("course")}
        </h2>

        <div
          className="
            progress-course__select
            dark:bg-[#18151f]!
            dark:border-[#302a3a]!
            dark:text-white!
          "
        >
          <span>React + TypeScript</span>

          <span className="progress-course__arrow dark:text-gray-400!">
            ⌄
          </span>
        </div>
      </div>

      <div className="progress-board">
        <div
          className="
            progress-board__card
            dark:bg-[#18151f]!
            dark:border-[#302a3a]!
          "
        >
          <div
            className="
              progress-board__item
              dark:border-[#302a3a]!
            "
          >
            <span className="dark:text-white!">20</span>

            <p className="dark:text-gray-400!">
              {t("students")}
            </p>
          </div>

          <div
            className="
              progress-board__item
              dark:border-[#302a3a]!
            "
          >
            <span className="dark:text-green-400!">14</span>

            <p className="dark:text-gray-400!">
              {t("completed")}
            </p>
          </div>

          <div
            className="
              progress-board__item
              dark:border-[#302a3a]!
            "
          >
            <span className="dark:text-yellow-400!">6</span>

            <p className="dark:text-gray-400!">
              {t("inProgress")}
            </p>
          </div>

          <div className="progress-board__item dark:border-[#302a3a]!">
            <span className="dark:text-white!">72%</span>

            <p className="dark:text-gray-400!">
              {t("averageProgress")}
            </p>
          </div>
        </div>
      </div>

      <div
        className="
          progress-students
          dark:bg-[#18151f]!
          dark:border-[#302a3a]!
        "
      >
        <div className="progress-students__header">
          <h2 className="progress-students__title dark:text-white!">
            {t("students")}
          </h2>

          <p className="progress-students__many dark:text-gray-400!">
            {t("studentsCount", { count: 20 })}
          </p>
        </div>

        <div className="progress-students__list">
          <div className="student-progress dark:border-[#302a3a]!">
            <div className="student-progress__info">
              <div
                className="
                  student-progress__avatar
                  dark:bg-[#30283d]!
                  dark:text-white!
                "
              >
                AK
              </div>

              <div>
                <h3 className="dark:text-white!">
                  Алексей Ким
                </h3>

                <p className="dark:text-gray-400!">
                  alexey@gmail.com
                </p>
              </div>
            </div>

            <div className="student-progress__lessons">
              <span className="dark:text-white!">
                18 / 24
              </span>

              <p className="dark:text-gray-400!">
                {t("lessonsCompleted")}
              </p>
            </div>

            <div className="student-progress__progress">
              <div className="student-progress__top">
                <span className="dark:text-gray-400!">
                  {t("progress")}
                </span>

                <strong className="dark:text-white!">
                  75%
                </strong>
              </div>

              <div className="student-progress__bar dark:bg-[#302a3a]!">
                <div
                  className="
                    student-progress__bar-fill
                    dark:bg-linear-to-r!
                    dark:from-violet-600!
                    dark:to-fuchsia-600!
                  "
                  style={{ width: "75%" }}
                />
              </div>
            </div>

            <div
              className="
                student-progress__status
                student-progress__status--process
                dark:bg-[#3b2d0d]!
                dark:text-yellow-400!
              "
            >
              {t("inProgress")}
            </div>
          </div>

          <div className="student-progress dark:border-[#302a3a]!">
            <div className="student-progress__info">
              <div
                className="
                  student-progress__avatar
                  dark:bg-[#30283d]!
                  dark:text-white!
                "
              >
                МИ
              </div>

              <div>
                <h3 className="dark:text-white!">
                  Мария Иванова
                </h3>

                <p className="dark:text-gray-400!">
                  maria@gmail.com
                </p>
              </div>
            </div>

            <div className="student-progress__lessons">
              <span className="dark:text-white!">
                24 / 24
              </span>

              <p className="dark:text-gray-400!">
                {t("lessonsCompleted")}
              </p>
            </div>

            <div className="student-progress__progress">
              <div className="student-progress__top">
                <span className="dark:text-gray-400!">
                  {t("progress")}
                </span>

                <strong className="dark:text-white!">
                  100%
                </strong>
              </div>

              <div className="student-progress__bar dark:bg-[#302a3a]!">
                <div
                  className="
                    student-progress__bar-fill
                    dark:bg-linear-to-r!
                    dark:from-violet-600!
                    dark:to-fuchsia-600!
                  "
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div
              className="
                student-progress__status
                student-progress__status--done
                dark:bg-[#12351f]!
                dark:text-green-400!
              "
            >
              {t("completedStatus")}
            </div>
          </div>

          <div className="student-progress dark:border-[#302a3a]!">
            <div className="student-progress__info">
              <div
                className="
                  student-progress__avatar
                  dark:bg-[#30283d]!
                  dark:text-white!
                "
              >
                НС
              </div>

              <div>
                <h3 className="dark:text-white!">
                  Нурбек Садыков
                </h3>

                <p className="dark:text-gray-400!">
                  nurbek@gmail.com
                </p>
              </div>
            </div>

            <div className="student-progress__lessons">
              <span className="dark:text-white!">
                10 / 24
              </span>

              <p className="dark:text-gray-400!">
                {t("lessonsCompleted")}
              </p>
            </div>

            <div className="student-progress__progress">
              <div className="student-progress__top">
                <span className="dark:text-gray-400!">
                  {t("progress")}
                </span>

                <strong className="dark:text-white!">
                  42%
                </strong>
              </div>

              <div className="student-progress__bar dark:bg-[#302a3a]!">
                <div
                  className="
                    student-progress__bar-fill
                    dark:bg-linear-to-r!
                    dark:from-violet-600!
                    dark:to-fuchsia-600!
                  "
                  style={{ width: "42%" }}
                />
              </div>
            </div>

            <div
              className="
                student-progress__status
                student-progress__status--process
                dark:bg-[#3b2d0d]!
                dark:text-yellow-400!
              "
            >
              {t("inProgress")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherAdvance;