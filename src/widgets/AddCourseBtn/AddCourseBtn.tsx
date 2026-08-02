import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { openModal } from "../../features/CreateCourse";
function AddCourseBtn() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <button
        onClick={() => dispatch(openModal())}
        className="course__btn border p-2 rounded-lg bg-purple-900 text-white text-lg font-semibold cursor-pointer"
      >
        + add course
      </button>
    </>
  );
}
export default AddCourseBtn;
