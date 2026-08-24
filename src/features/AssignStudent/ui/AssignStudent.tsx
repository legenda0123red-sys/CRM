import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import { closeW } from "../model/AssignStudentSlice";
import { AssignSearch } from "../../AssignSearch";
import { AssignStudentCard } from "../../../widgets/AssignStudentCard";
import { useTranslation } from "react-i18next";

function AssignStudent() {
  const {t, i18n} = useTranslation('course')
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector(
    (state: RootState) => state.AssignStudentReducer.isOpen,
  );

  if (!isOpen) return null;
  return (
    <>
      <div
       key={i18n.language}
       className="language-fade fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="w-125 bg-white rounded-2xl shadow-2xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">{t('addStudents')}</h2>

              <p className="text-sm text-gray-500 mt-1">
                {t('SelectStudents')}
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
        <AssignStudentCard />
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
              {t('Cancel')}
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
              {t('add')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AssignStudent;
