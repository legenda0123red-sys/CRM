import './UserAdvance.scss'
function UserAdvance() {
  const courses = [
    {
      title: "React",
      completed: 18,
      total: 24,
      percent: 75,
    },
    {
      title: "TypeScript",
      completed: 12,
      total: 20,
      percent: 60,
    },
    {
      title: "Node.js",
      completed: 16,
      total: 20,
      percent: 80,
    },
  ];

  return (
    <div className="progress">
      <div className="progress__header">
        <div>
          <h1>Progress</h1>
          <p>Ваш прогресс обучения по курсам</p>
        </div>

        <div className="progress__overall">
          <span>Общий прогресс</span>
          <strong>72%</strong>
        </div>
      </div>

      <div className="progress__stats">
        <div className="progress__stat">
          <span>Курсов</span>
          <strong>3</strong>
        </div>

        <div className="progress__stat">
          <span>Уроков</span>
          <strong>46</strong>
        </div>

        <div className="progress__stat">
          <span>Завершено</span>
          <strong>33</strong>
        </div>

        <div className="progress__stat">
          <span>Процент</span>
          <strong>72%</strong>
        </div>
      </div>

      <div className="progress__list">
        {courses.map((course) => (
          <div className="progress__card" key={course.title}>
            <div className="progress__card-top">
              <div>
                <span className="progress__label">COURSE</span>
                <h2>{course.title}</h2>
              </div>

              <strong className="progress__percent">{course.percent}%</strong>
            </div>

            <div className="progress__bar">
              <div
                className="progress__bar-fill"
                style={{ width: `${course.percent}%` }}
              />
            </div>

            <div className="progress__bottom">
              <span>
                {course.completed} из {course.total} уроков
              </span>

              <span>{course.total - course.completed} осталось</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default UserAdvance;
