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
        className="language-fade flex items-center gap-2 h-9 p-6 ti ti-plus text-lg rounded-lg border border-b-slate-800 bg-slate-300  hover:bg-slate-400 active:scale-95 transition"
      >
        + {t("AddEmployee")}
      </button>
    </>
  );
}
export default EmployeesBtn;
