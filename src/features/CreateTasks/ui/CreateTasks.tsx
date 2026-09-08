import { useTranslation } from "react-i18next";
import "../CreateTasks.scss";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";

import { useState } from "react";
import type { IMessage } from "../../RegistrationForm/RegistrationForm";
import { closeTask, createHw, type IHomework } from "../model/tasksSlice";
function CreateTasks() {
  const [message, setMessage] = useState<IMessage>({
    text: "",
    color: "",
  });
  function showMessage(text: string, color: string) {
    setMessage({ text, color });
    setTimeout(() => {
      setMessage({
        text: "",
        color: "",
      });
    }, 2000);
  }
  const [task, setTask] = useState<IHomework>({
    title: "",
    desc: "",
    deadline: "",
    score: 0,
  });

  const dispatch = useDispatch<AppDispatch>();
  const modal = useSelector(
    (state: RootState) => state.createTaskReducer.isOpen,
  );
  const { t, i18n } = useTranslation("task");
  if (!modal) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !task.deadline.trim() ||
      !task.desc.trim() ||
      !task.score ||
      !task.title.trim()
    ) {
      showMessage("Поля пустые", "red");
      return;
    }

    const selectedDate = new Date(task.deadline);
    const now = new Date();

    if (selectedDate <= now) {
      showMessage("Дедлайн не может быть в прошлом", "red");
      return;
    }

    const MaxDate = new Date();
    MaxDate.setDate(MaxDate.getDate() + 7);
    if (selectedDate > MaxDate) {
      showMessage("Дейдлайн можно установить максимум на 7 дней", "red");
      return;
    }

    if (task.score > 100) {
      showMessage("Балл можно поставить не большее 100", "red");
      return;
    }

    const newTask = {
      title: task.title[0].toUpperCase() + task.title.slice(1),
      desc: task.desc,
      deadline: task.deadline,
      score: Number(task.score),
    };

    dispatch(createHw(newTask));
    setTask({ title: "", desc: "", deadline: "", score: 0 });
  };
  return (
    <>
      <div key={i18n.language} className="create">
        <div className="modal">
          <div className="create-header">
            <h2 className="create-header__title">{t("create")}</h2>
            <button
              onClick={() => dispatch(closeTask())}
              className="create-header__button"
            >
              X
            </button>
          </div>
          <form onSubmit={handleSubmit} className="create-form" action="">
            <div className="create-form__div">
              <label className="create-form__title">{t("taskTitle")}</label>
              <input
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })}
                className="create-form__input"
                placeholder={t("taskTitle")}
                type="text"
              />
            </div>
            <div className="create-form__div">
              <label className="create-form__title">{t("taskDesc")}</label>
              <textarea
                value={task.desc}
                onChange={(e) => setTask({ ...task, desc: e.target.value })}
                className="create-form__input"
                placeholder={t("taskDesc")}
              />
            </div>
            <div className="create-form__div">
              <label className="create-form__title ">{t("taskDeadline")}</label>
              <input
                value={task.deadline}
                onChange={(e) => setTask({ ...task, deadline: e.target.value })}
                className="create-form__input deadline"
                placeholder={t("taskDeadline")}
                type="datetime-local"
              />
            </div>
            <div className="create-form__div">
              <label className="create-form__title">{t("TaskScore")}</label>
              <input
                value={task.score}
                onChange={(e) =>
                  setTask({ ...task, score: Number(e.target.value) })
                }
                className="create-form__input score"
                placeholder={"100"}
                type="number"
                min={0}
                max={100}
              />
            </div>
            <div className="create-form-btns">
              <button type="submit" className="create-btns__task">
                {t("create")}
              </button>
              <button
                type="button"
                onClick={() => dispatch(closeTask())}
                className="create-btns__cancel"
              >
                {t("cancel")}
              </button>
            </div>
            <p style={{ color: message.color }}>{message.text}</p>
          </form>
        </div>
      </div>
    </>
  );
}
export default CreateTasks;
