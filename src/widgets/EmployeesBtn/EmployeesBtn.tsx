import { useTranslation } from "react-i18next";

function EmployeesBtn() {
    const {t, i18n} = useTranslation('employees')
  return (
    <>
      <button
      key={i18n.language}
      className="language-fade flex items-center gap-2 h-9 p-6 ti ti-plus text-lg rounded-lg border border-b-slate-800 bg-slate-300  hover:bg-slate-400 active:scale-95 transition">
        + {t('AddEmployee')}
      </button>
    </>
  );
}
export default EmployeesBtn;
