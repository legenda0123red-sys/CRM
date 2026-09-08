import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateTasks,
  getHw,
  HwStatus,
  openTask,
} from "../../features/CreateTasks";
import "./TeacherHw.scss";
import type { AppDispatch, RootState } from "../../app/store";

function TeacherHw() {
  const dispatch = useDispatch<AppDispatch>();

  const { homework, loading, error } = useSelector(
    (state: RootState) => state.createTaskReducer,
  );

  useEffect(() => {
    dispatch(getHw());
  }, [dispatch]);

  return (
    <>
      <div className="hw">
        <div className="hw-header">
          <h2 className="hw-header__title">Home Work</h2>

          <button
            onClick={() => dispatch(openTask())}
            className="hw-header__button"
          >
            Create Task
          </button>

          <CreateTasks />
          <HwStatus />
        </div>

        <div className="hw-tasks">
          {loading ? (
            <p className="flex h-full min-h-75 items-center justify-center text-lg">
              Загрузка заданий...
            </p>
          ) : error ? (
            <p className="flex h-full min-h-75 items-center justify-center text-lg text-red-500">
              {error}
            </p>
          ) : homework.length === 0 ? (
            <p className="flex h-full min-h-75 items-center justify-center text-lg">
              Заданий пока нет
            </p>
          ) : (
            homework.map((hw, index) => (
              <div className="hw-card" key={index}>
                <h1 className="hw-card__title">📚 Title: {hw.title}</h1>

                <p className="hw-card__desc">{hw.desc}</p>

                <div className="hw-card__controler">
                  <p className="hw-card__deadline">
                    Дедлайн: {new Date(hw.deadline).toLocaleString()}
                  </p>

                  <p className="hw-card__completed">Балл: {hw.score}</p>
                </div>

                <div className="hw-card__works">
                  <button className="hw-card__button">Посмотреть работу</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default TeacherHw;
