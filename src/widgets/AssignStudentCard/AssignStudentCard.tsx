import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

function AssignStudentCard(){
  const {i18n, t} = useTranslation('course')
     const allStudent = useSelector(
    (state: RootState) => state.studentReducer.students
  );
  const searchCourse = useSelector(
    (state: RootState) => state.searchReducer.search,
  );

  const visibleStudents = useMemo(() => {
    const query = searchCourse.trim().toLowerCase();
    if (!query) return allStudent;
    return allStudent.filter((course) =>
      course.name.toLowerCase().includes(query),
    );
  }, [allStudent, searchCourse]);

  if (visibleStudents.length === 0) {
    return (
      <div
      key={i18n.language}
      className="text-center language-fade">
        <p className="text-gray-500 font-bold">{t('NotFoundStudents')}</p>
      </div>
    )
}

    return (
        <>
        {visibleStudents.map((item) => (
             <div
             key={i18n.language}
              className="
              language-fade
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
                  <h3 className="font-semibold">{item.name} {item.username}</h3>

                  <p className="text-sm text-gray-500">{item.parentsPhone}</p>
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
        ))}
        </>
    )
}
export default AssignStudentCard