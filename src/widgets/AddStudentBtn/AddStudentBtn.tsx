import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { openWindow } from "../../features/CreateStudents";

function AddCourseBtn() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <button
        onClick={() => dispatch(openWindow())}
        className="course__btn border p-2 rounded-lg bg-purple-900 text-white text-lg font-semibold cursor-pointer"
      >
        + add student
      </button>
    </>
  );
}
export default AddCourseBtn;
