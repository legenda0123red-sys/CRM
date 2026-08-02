import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import { closeModal, addCourse, type ICourse } from "../model/createSlice";
import { useState } from "react";

function CreateCourse() {
  const [database, setDataBase] = useState<ICourse>({
    title: "",
    desc: "",
    AllStudents: 0,
    Mentors: 2,
    timing: "",
    time: "",
  });
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector(
    (state: RootState) => state.createCourseModalReducer.isOpen,
  );
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addCourse({ ...database, id: Date.now() }));
    dispatch(closeModal());
    setDataBase({
      title: "",
      desc: "",
      AllStudents: 0,
      timing: "",
      time: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-100">
        <h3 className="text-xl font-bold mb-4">Создать курс</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            required
            value={database.title}
            onChange={(e) =>
              setDataBase({ ...database, title: e.target.value })
            }
            type="text"
            placeholder="Название курса"
            className="border p-2 rounded"
          />
          <textarea
            required
            value={database.desc}
            onChange={(e) => setDataBase({ ...database, desc: e.target.value })}
            placeholder="Описание"
            className="border p-2 rounded"
          />
          <input
            required
            value={database.AllStudents}
            onChange={(e) =>
              setDataBase({ ...database, AllStudents: Number(e.target.value) })
            }
            type="number"
            placeholder="Кол-во студентов"
            className="border p-2 rounded"
          />
          <input
            required
            value={database.timing}
            onChange={(e) =>
              setDataBase({ ...database, timing: e.target.value })
            }
            type="text"
            placeholder="Расписание курсов"
            className="border p-2 rounded"
          />
          <input
            required
            value={database.time}
            onChange={(e) => setDataBase({ ...database, time: e.target.value })}
            type="text"
            placeholder="17:00 - 19:00"
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-purple-900 text-white p-2 rounded cursor-pointer font-semibold"
          >
            Создать
          </button>
        </form>

        <button
          onClick={() => dispatch(closeModal())}
          className="mt-3 text-gray-500 cursor-pointer"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default CreateCourse;
