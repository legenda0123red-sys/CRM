import './UserHw.scss';
function UserHw(){
    return (
        <>
    <div className="homework">
      <div className="homework__header">
        <div>
          <h1>Home Work</h1>
          <p>Ваши задания и сроки выполнения</p>
        </div>

        <div className="homework__stats">
          <div className="homework__stat">
            <span>Всего</span>
            <strong>12</strong>
          </div>

          <div className="homework__stat">
            <span>Выполнено</span>
            <strong>7</strong>
          </div>

          <div className="homework__stat">
            <span>Ожидает</span>
            <strong>5</strong>
          </div>
        </div>
      </div>

      <div className="homework__list">
        <div className="homework__card">
          <div className="homework__card-top">
            <span className="homework__course">React</span>

            <span className="homework__status homework__status--pending">
              Pending
            </span>
          </div>

          <h2>Создать Todo приложение</h2>

          <p>
            Реализовать добавление, удаление и изменение задач с использованием
            React.
          </p>

          <div className="homework__info">
            <span>📅 Deadline: 30 Aug</span>
            <span>⭐ Easy</span>
          </div>

          <button>Open homework →</button>
        </div>
      </div>
    </div>
        </>
    )
}
export default UserHw;