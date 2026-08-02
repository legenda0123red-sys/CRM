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
    title: "",
    phone: "",
    parentsPhone: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
      if (
    !userData.title.trim() ||
    !userData.phone.trim() ||
    !userData.parentsPhone.trim()
  ) {
    alert("Заполните все поля");
    return;
  }

    dispatch(addStudent({ ...userData, id: Date.now() }));
    dispatch(closeWindow());
    setUserData({
      title: "",
      phone: "",
      parentsPhone: "",
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
              value={userData.title}
              onChange={(e) =>
                setUserData({ ...userData, title: e.target.value })
              }
              placeholder="Имя студента"
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
