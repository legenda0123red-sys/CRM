import { useSelector } from "react-redux";
import "./TeacherCourses.scss";
import type { RootState } from "../../app/store";

function TeacherCourses() {
    const course = useSelector((state: RootState) => state.createCourseModalReducer.base);
  return (
    <div className="courses-card">

    {course.map((course) => (
        <div className="course-card">
      <div className="course-card__top">
        <span
          className={`course-card__status course-card__status--${course.status}`}
        >
          {course.status === "active" && "Активен"}
          {course.status === "planned" && "Запланирован"}
          {course.status === "completed" && "Завершён"}
        </span>

        <span className="course-card__level">{course.level}</span>
      </div>

      <h3 className="course-card__title">{course.title}</h3>

      <p className="course-card__description">{course.desc}</p>

      <div className="course-card__info">
        <div className="course-card__info-item">
          <span className="course-card__info-label">Студенты</span>

          <span className="course-card__info-value ">
            {course.AllStudents} / {course.maxStudents}
          </span>
        </div>

        <div className="course-card__info-item">
          <span className="course-card__info-label">Менторы</span>

          <span className="course-card__info-value">{course.Mentors}</span>
        </div>

        <div className="course-card__info-item">
          <span className="course-card__info-label">Формат</span>

          <span className="course-card__info-value">{course.format}</span>
        </div>

        <div className="course-card__info-item">
          <span className="course-card__info-label">Длительность</span>

          <span className="course-card__info-value">
            {course.completedLessons} / {course.lessons}
          </span>
        </div>
      </div>

      <div className="course-card__progress">
        <div className="course-card__progress-top">
          <span className="course-card__progress-title">Прогресс курса</span>

          <span className="course-card__progress-value">
            {Math.round(
              (course.completedLessons / Number(course.lessons)) * 100,
            )}
            %
          </span>
        </div>

        <div className="course-card__progress-bar">
          <div
            className="course-card__progress-fill"
            style={{
              width: `${
                (course.completedLessons / Number(course.lessons)) * 100
              }%`,
            }}
          />
        </div>
      </div>

      <div className="course-card__schedule">
        <strong>{course.time}</strong>
        <span>•</span>
        <span>{course.timing}</span>
      </div>

      <button className="course-card__open-btn">Открыть курс</button>
    </div>
    ))}
    </div>
  );
}
export default TeacherCourses;
