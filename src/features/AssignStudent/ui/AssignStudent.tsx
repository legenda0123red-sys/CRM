import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import { closeW } from "../model/AssignStudentSlice";
import { AssignSearch } from "../../AssignSearch";

function AssignStudent() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector(
    (state: RootState) => state.AssignStudentReducer.isOpen,
  );

  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="w-125 bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">Добавить студентов</h2>

              <p className="text-sm text-gray-500 mt-1">
                Выберите студентов для курса
              </p>
            </div>

            <button
              onClick={() => dispatch(closeW())}
              className="text-gray-400 hover:text-black text-2xl"
            >
              ✕
            </button>
          </div>

          <div>
            <AssignSearch />
          </div>

          <div className="mt-5 flex flex-col gap-3 max-h-80 overflow-y-auto">
            <div
              className="
          flex
          items-center
          justify-between
          p-4
          rounded-xl
          border
          hover:bg-gray-50
          cursor-pointer
        "
            >
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  className="
              w-12
              h-12
              rounded-full
              object-cover
            "
                />

                <div>
                  <h3 className="font-semibold">Санжар Абдырахманов</h3>

                  <p className="text-sm text-gray-500">Frontend Developer</p>
                </div>
              </div>

              <input
                type="checkbox"
                className="
            w-5
            h-5
            accent-cyan-600
          "
              />
            </div>

            <div
              className="
          flex
          items-center
          justify-between
          p-4
          rounded-xl
          border
          hover:bg-gray-50
          cursor-pointer
        "
            >
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/150?img=20"
                  className="
              w-12
              h-12
              rounded-full
              object-cover
            "
                />

                <div>
                  <h3 className="font-semibold">Айбек</h3>

                  <p className="text-sm text-gray-500">React Student</p>
                </div>
              </div>

              <input
                type="checkbox"
                className="
            w-5
            h-5
            accent-cyan-600
          "
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={() => dispatch(closeW())}
              className="
          px-5
          py-3
          rounded-xl
          border
          hover:bg-gray-100
        "
            >
              Отмена
            </button>

            <button
              className="
          px-6
          py-3
          rounded-xl
          bg-cyan-600
          text-white
          font-semibold
          hover:bg-cyan-700
        "
            >
              Добавить
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AssignStudent;
