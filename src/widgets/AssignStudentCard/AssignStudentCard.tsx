import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { toggleStudent } from "../../features/AssignStudent/model/AssignStudentSlice";

function AssignStudentCard() {
  const { i18n, t } = useTranslation("course");
  const dispatch = useDispatch<AppDispatch>();

  const allStudent = useSelector(
    (state: RootState) => state.studentReducer.students,
  );
  const searchStudent = useSelector(
    (state: RootState) => state.AssignSearchReducer.search,
  );
  const selectedIds = useSelector(
    (state: RootState) => state.AssignStudentReducer.selectedIds,
  );

  const visibleStudents = useMemo(() => {
    const query = searchStudent.trim().toLowerCase();

    if (!query) return allStudent;

    return allStudent.filter((student) => {
      const fullName =
        `${student.user.firstName} ${student.user.lastName}`.toLowerCase();

      return fullName.includes(query);
    });
  }, [allStudent, searchStudent]);

  if (visibleStudents.length === 0) {
    return (
      <div key={i18n.language} className="text-center language-fade">
        <p className="text-gray-500 font-bold">{t("NotFoundStudents")}</p>
      </div>
    );
  }

  return (
    <>
      {visibleStudents.map((item) => {
        const isChecked = selectedIds.includes(item.id);
        return (
          <div
            key={item.id}
            onClick={() => dispatch(toggleStudent(item.id))}
            className={`
              language-fade
              flex
              items-center
              justify-between
              p-4
              rounded-xl
              border
              hover:bg-gray-50
              cursor-pointer
              ${isChecked ? "bg-cyan-50 border-cyan-400" : ""}
            `}
          >
            <div className="flex items-center gap-4">
              <img
                src="https://i.pravatar.cc/150?img=12"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">
                  {item.user.firstName} {item.user.lastName}
                </h3>
                <p className="text-sm text-gray-500">{item.parentsPhone}</p>
              </div>
            </div>

            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => dispatch(toggleStudent(item.id))}
              onClick={(e) => e.stopPropagation()}
              className="w-5 h-5 accent-cyan-600"
            />
          </div>
        );
      })}
    </>
  );
}
export default AssignStudentCard;
