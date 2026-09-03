import { useState } from "react";
import "./TeacherAtten.scss";

function TeacherAtten() {
  const [students, setStudents] = useState([
    { id: 1, name: "Azamat", here: false },
    { id: 2, name: "Алексей Ким", here: true },
    { id: 3, name: "Мария Иванова", here: false },
    { id: 4, name: "Нурбек Садыков", here: true },
  ]);

  const toggleAttendance = (id: number) => {
    setStudents((prev) =>
      prev.map((student) =>
        student.id === id ? { ...student, here: !student.here } : student,
      ),
    );
  };

  const presentCount = students.filter((student) => student.here).length;
  const absentCount = students.length - presentCount;

  return (
    <div className="attendance">

      <div className="attendance-header">
        <div>
          <h2 className="attendance-header__title dark:text-white">
            Attendance
          </h2>

          <p className="attendance-header__desc dark:text-white">
            Отметьте присутствие студентов на занятии
          </p>
        </div>
      </div>

      
      <div className="attendance-data">
        <div className="attendance-data__item">
          <span>Урок</span>
          <p className="dark:text-white">React</p>
        </div>

        <div className="attendance-data__item">
          <span>Дата</span>

          <input type="date" defaultValue="2026-09-03" />
        </div>
      </div>

      
      <div className="attendance-board">
        <div className="attendance-board__stats">
          <div className="attendance-board__stat">
            <span>{students.length}</span>
            <p>Всего студентов</p>
          </div>

          <div className="attendance-board__stat">
            <span>{presentCount}</span>
            <p>Присутствуют</p>
          </div>

          <div className="attendance-board__stat">
            <span>{absentCount}</span>
            <p>Отсутствуют</p>
          </div>
        </div>

        
        <div className="attendance-many">
          <div>
            <h2 className="attendance-many__students dark:text-white">
              Students
            </h2>

            <p className="attendance-many__data dark:text-white">
              {students.length} студентов
            </p>
          </div>
        </div>

        
        <div className="attendance-list">
          <div className="attendance-list__header">
            <p>Student</p>
            <p>Status</p>
          </div>

          {students.map((student) => (
            <div className="attendance-student" key={student.id}>
              <div className="attendance-student__info">
                <div className="attendance-student__avatar">
                  {student.name.slice(0, 1).toUpperCase()}
                </div>

                <p className="dark:text-white">{student.name}</p>
              </div>

              <button
                className={`attendance-student__button ${
                  student.here
                    ? "attendance-student__button--present"
                    : "attendance-student__button--absent"
                }`}
                onClick={() => toggleAttendance(student.id)}
              >
                <span>{student.here ? "✅" : "❌"}</span>

                {student.here ? "Присутствует" : "Отсутствует"}
              </button>
            </div>
          ))}
        </div>

        <div className="attendance-save">
          <button className="attendance-save__btn">
            Сохранить посещаемость
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeacherAtten;
