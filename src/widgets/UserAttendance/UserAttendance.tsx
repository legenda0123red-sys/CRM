import './UserAttendance.scss'
function UserAttendance(){
   const attendance = [
    {
      date: "26 Aug 2026",
      course: "React",
      time: "10:00 — 11:30",
      status: "Present",
    },
    {
      date: "25 Aug 2026",
      course: "TypeScript",
      time: "12:00 — 13:30",
      status: "Present",
    },
    {
      date: "24 Aug 2026",
      course: "React",
      time: "10:00 — 11:30",
      status: "Absent",
    },
    {
      date: "23 Aug 2026",
      course: "Node.js",
      time: "14:00 — 15:30",
      status: "Present",
    },
  ];

  return (
    <div className="attendance">
      <div className="attendance__header">
        <div>
          <h1>Attendance</h1>
          <p>История посещения ваших занятий</p>
        </div>

        <div className="attendance__stats">
          <div className="attendance__stat">
            <span>Всего</span>
            <strong>24</strong>
          </div>

          <div className="attendance__stat">
            <span>Посещено</span>
            <strong>21</strong>
          </div>

          <div className="attendance__stat">
            <span>Пропущено</span>
            <strong>3</strong>
          </div>

          <div className="attendance__stat">
            <span>Процент</span>
            <strong>87%</strong>
          </div>
        </div>
      </div>

      <div className="attendance__list">
        {attendance.map((item, index) => (
          <div className="attendance__card" key={index}>
            <div className="attendance__card-top">
              <span className="attendance__course">{item.course}</span>

              <span
                className={`attendance__status attendance__status--${item.status.toLowerCase()}`}
              >
                {item.status === "Present" ? "Присутствовал" : "Пропустил"}
              </span>
            </div>

            <div className="attendance__info">
              <div>
                <span className="attendance__label">Дата</span>
                <strong>{item.date}</strong>
              </div>

              <div>
                <span className="attendance__label">Время</span>
                <strong>{item.time}</strong>
              </div>
            </div>

            <div className="attendance__icon">
              {item.status === "Present" ? "✓" : "×"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default UserAttendance;