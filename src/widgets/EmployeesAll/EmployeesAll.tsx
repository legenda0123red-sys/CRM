import { useTranslation } from "react-i18next";
import { EmployeesBtn } from "../EmployeesBtn";
import { CreateEmployees } from "../../features/CreateEmployees";

function EmployeesAll() {
    const {t, i18n} = useTranslation('employees');
  return (
    <>
      <div
      key={i18n.language}
      className="language-fade flex items-center justify-between mb-9">
        <div>
          <h2 className="text-2xl font-bold mb-1 dark:text-white">{t('Employees')}</h2>
          <p className="text-base text-gray-500 font-serif dark:text-gray-400">
            12 {t('EmployeesTeem')}
          </p>
        </div>
        <EmployeesBtn />
        <CreateEmployees />
      </div>
    </>
  );
}
export default EmployeesAll;
