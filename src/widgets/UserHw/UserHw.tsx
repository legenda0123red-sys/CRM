import { useSelector } from "react-redux";
import "./UserHw.scss";
import type { RootState } from "../../app/store";

function UserHw() {
  const homework = useSelector(
    (state: RootState) => state.createTaskReducer.homework,
  );
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
              <strong>{homework.length}</strong>
            </div>

            <div className="homework__stat">
              <span>Выполнено</span>
              <strong>0</strong>
            </div>

            <div className="homework__stat">
              <span>Ожидает</span>
              <strong>{homework.length}</strong>
            </div>
          </div>
        </div>

        <div className="homework__list">
          {homework.map((item) => (
            <div className="homework__card" key={item.title}>
              <div className="homework__card-top">
                <span className="homework__course">Homework</span>

                <span className="homework__status homework__status--pending">
                  Pending
                </span>
              </div>

              <h2>{item.title}</h2>

              <p>{item.desc}</p>

              <div className="homework__info">
                <span>📅 Deadline: {item.deadline}</span>
                <span>⭐ Score: {item.score}</span>
              </div>

              <button>Open homework →</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default UserHw;
