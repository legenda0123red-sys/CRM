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
    startDate: '',
    lessons: '',
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
      startDate: '',
      lessons: '',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-100">
        <h3 className="text-xl font-bold mb-4">Создать курс</h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="w-full max-w-md">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select course
              </label>

              <div className="relative">
                <select
                  required
                  name="course"
                  onChange={(e) =>
                    setDataBase({ ...database, title: e.target.value })
                  }
                  className="
        w-full
        appearance-none
        bg-white
        border
        border-gray-200
        rounded-xl
        px-4
        py-3
        pr-10
        text-gray-700
        font-medium
        shadow-sm
        outline-none
        cursor-pointer
        transition
        focus:border-indigo-500
        focus:ring-4
        focus:ring-indigo-100
        hover:border-indigo-300
      "
                >
                  <option>Select course</option>
                  <option>React + TypeScript</option>

                  <option>Node.js Backend</option>

                  <option>NestJS Advanced</option>

                  <option>Python</option>

                  <option>HTML + CSS</option>

                  <option>React</option>

                  <option>JavaScript</option>
                </select>

                <span
                  className="
        absolute
        right-4
        top-1/2
        -translate-y-1/2
        text-gray-400
        pointer-events-none
        text-sm
      "
                >
                  ▼
                </span>
              </div>
            </div>
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
            value={database.lessons}
            onChange={(e) =>
              setDataBase({ ...database, lessons: e.target.value })
            }
            type="text"
            placeholder="Кол-во уроков"
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
          <input
            required
            value={database.startDate}
            onChange={(e) => setDataBase({ ...database, startDate: e.target.value })}
            type="date"
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
