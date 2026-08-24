import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { openEmployeesW } from "../../features/CreateEmployees";

function EmployeesBtn() {
  const { t, i18n } = useTranslation("employees");
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <button
        key={i18n.language}
        onClick={() => dispatch(openEmployeesW())}
        className="language-fade flex items-center dark:bg-cyan-900 dark:hover:bg-cyan-800 dark:text-white  gap-2 h-9 p-6 ti ti-plus text-lg rounded-lg border  bg-slate-300  hover:bg-slate-400 active:scale-95 transition cursor-pointer"
      > 
        + {t("AddEmployee")}
      </button>
    </>
  );
}
export default EmployeesBtn;
