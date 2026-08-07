import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { useMemo } from "react";

function AssignStudentCard(){
     const allStudent = useSelector(
    (state: RootState) => state.createStudentReducer.students
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
      <div className="text-center">
        <p className="text-gray-500 font-bold">Студенты не найдены.</p>
      </div>
    )
}

    return (
        <>
        {visibleStudents.map((item) => (
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