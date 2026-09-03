
import "./TeacherAdvance.scss";

function TeacherAdvance() {
  return (
    <div className="progress">

      <div className="progress-header">
        <div>
          <h2 className="progress-header__title">
            Прогресс студентов
          </h2>

          <p className="progress-header__desc">
            Отслеживайте обучение студентов курса
          </p>
        </div>
      </div>


      <div className="progress-course">
        <h2 className="progress-course__title">Курс</h2>

        <div className="progress-course__select">
          <span>React + TypeScript</span>
          <span className="progress-course__arrow">⌄</span>
        </div>
      </div>


      <div className="progress-board">
        <div className="progress-board__card">
          <div className="progress-board__item">
            <span>20</span>
            <p>Студентов</p>
          </div>

          <div className="progress-board__item">
            <span>14</span>
            <p>Завершили</p>
          </div>

          <div className="progress-board__item">
            <span>6</span>
            <p>В процессе</p>
          </div>

          <div className="progress-board__item">
            <span>72%</span>
            <p>Средний прогресс</p>
          </div>
        </div>
      </div>


      <div className="progress-students">
        <div className="progress-students__header">
            <h2 className="progress-students__title">
              Студенты
            </h2>

            <p className="progress-students__many">
              20 студентов
            </p>
        </div>


        <div className="progress-students__list">
          <div className="student-progress">
            <div className="student-progress__info">
              <div className="student-progress__avatar">
                AK
              </div>

              <div>
                <h3>Алексей Ким</h3>
                <p>alexey@gmail.com</p>
              </div>
            </div>

            <div className="student-progress__lessons">
              <span>18 / 24</span>
              <p>Уроков пройдено</p>
            </div>

            <div className="student-progress__progress">
              <div className="student-progress__top">
                <span>Прогресс</span>
                <strong>75%</strong>
              </div>

              <div className="student-progress__bar">
                <div
                  className="student-progress__bar-fill"
                  style={{ width: "75%" }}
                />
              </div>
            </div>

            <div className="student-progress__status student-progress__status--process">
              В процессе
            </div>
          </div>

          {/* Student 2 */}
          <div className="student-progress">
            <div className="student-progress__info">
              <div className="student-progress__avatar">
                МИ
              </div>

              <div>
                <h3>Мария Иванова</h3>
                <p>maria@gmail.com</p>
              </div>
            </div>

            <div className="student-progress__lessons">
              <span>24 / 24</span>
              <p>Уроков пройдено</p>
            </div>

            <div className="student-progress__progress">
              <div className="student-progress__top">
                <span>Прогресс</span>
                <strong>100%</strong>
              </div>

              <div className="student-progress__bar">
                <div
                  className="student-progress__bar-fill"
                  style={{ width: "100%" }}
                />
              </div>
            </div>

            <div className="student-progress__status student-progress__status--done">
              Завершено
            </div>
          </div>

          {/* Student 3 */}
          <div className="student-progress">
            <div className="student-progress__info">
              <div className="student-progress__avatar">
                НС
              </div>

              <div>
                <h3>Нурбек Садыков</h3>
                <p>nurbek@gmail.com</p>
              </div>
            </div>

            <div className="student-progress__lessons">
              <span>10 / 24</span>
              <p>Уроков пройдено</p>
            </div>

            <div className="student-progress__progress">
              <div className="student-progress__top">
                <span>Прогресс</span>
                <strong>42%</strong>
              </div>

              <div className="student-progress__bar">
                <div
                  className="student-progress__bar-fill"
                  style={{ width: "42%" }}
                />
              </div>
            </div>

            <div className="student-progress__status student-progress__status--process">
              В процессе
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherAdvance;

