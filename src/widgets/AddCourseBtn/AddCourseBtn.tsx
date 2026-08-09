import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { openModal } from "../../features/CreateCourse";
import { useTranslation } from "react-i18next";
function AddCourseBtn() {
  const dispatch = useDispatch<AppDispatch>();
  const { t, i18n } = useTranslation("controls");
  return (
    <>
      <button
      key={i18n.language}
        onClick={() => dispatch(openModal())}
        className="language-fade course__btn border p-3 rounded-lg bg-purple-900 text-white text-lg font-semibold cursor-pointer"
      >
        + {t("addCourseBtn")}
      </button>
    </>
  );
}
export default AddCourseBtn;
