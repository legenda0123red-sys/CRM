import { useDispatch, useSelector } from "react-redux";
import { addStudent, closeWindow, type IStudent } from "../model/createStudent";
import { useState } from "react";
import type { AppDispatch, RootState } from "../../../app/store";
function CreateStudents() {
  const dispatch = useDispatch<AppDispatch>();
  const IsOpen = useSelector(
    (state: RootState) => state.createStudentReducer.Open,
  );
  const [userData, setUserData] = useState<IStudent>({
    name: "",
    username: "",
    phone: "",
    parentsPhone: "",
    courses: [],
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !userData.name.trim() ||
      !userData.username.trim() ||
      !userData.phone.trim() ||
      !userData.parentsPhone.trim() ||
      userData.courses.length === 0
    ) {
      alert("Заполните все поля");
      return;
    }

    dispatch(addStudent({ ...userData, id: Date.now() }));
    dispatch(closeWindow());
    setUserData({
      name: "",
      username: "",
      phone: "",
      parentsPhone: "",
      courses: [],
    });
  };

  if (!IsOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-100">
          <h3 className="text-xl font-bold mb-4">Создать студента</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              required
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              placeholder="Имя студента"
              className=" border p-2 rounded"
              type="text"
            />
            <input
              required
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
              placeholder="Фамилия студента"
              className=" border p-2 rounded"
              type="text"
            />

            <input
              required
              value={userData.phone}
              onChange={(e) =>
                setUserData({ ...userData, phone: e.target.value })
              }
              placeholder="Номер студента"
              className=" border p-2 rounded"
              type="text"
            />
            <input
              required
              value={userData.parentsPhone}
              onChange={(e) =>
                setUserData({ ...userData, parentsPhone: e.target.value })
              }
              placeholder="Номер родителей"
              className=" border p-2 rounded"
              type="text"
            />
            <div className="w-full max-w-md">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Select course
              </label>

              <div className="relative">
                <select
                  required
                  name="course"
                  onChange={(e) =>
                    setUserData({ ...userData, courses: [e.target.value] })
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
            <button
              className="bg-purple-900 text-white p-2 rounded cursor-pointer font-semibold"
              type="submit"
            >
              Создать
            </button>
          </form>
          <button
            onClick={() => dispatch(closeWindow())}
            className="mt-3 text-gray-500 cursor-pointer"
          >
            Закрыть
          </button>
        </div>
      </div>
    </>
  );
}
export default CreateStudents;
