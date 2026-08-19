import { useTranslation } from "react-i18next";
import { Manager, Curator, Teachers } from "../../shared/icons/icons";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { useMemo } from "react";
function EmployeesBoard() {
  const { t, i18n } = useTranslation("employees");
  const employeeStatic = useSelector(
    (state: RootState) => state.createEmployeesReducer.list,
  );

  const managersStatic = useMemo(() => {
    return employeeStatic.filter((item) => item.role === "Менеджер");
  }, [employeeStatic]);

  const administratorsStatic = useMemo(() => {
    return employeeStatic.filter((item) => item.role === "Администратор");
  }, [employeeStatic]);

  const teachersStatic = useMemo(() => {
    return employeeStatic.filter((item) => item.role === "Преподаватель");
  }, [employeeStatic]);

  const curatorsStatic = useMemo(() => {
    return employeeStatic.filter((item) => item.role === "Куратор");
  }, [employeeStatic]);
  return (
    <>
      <div
        key={i18n.language}
        className="language-fade grid grid-cols-4 gap-4 mb-6"
      >
        <div className="bg-[#f1efe8] rounded-xl p-5 flex items-center gap-4 hover:bg-[#ece9df] transition-colors">
          <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
            <img src={Manager} alt="" className="w-5 h-5" />
          </div>

          <div>
            <p className="text-2xl font-semibold leading-none text-gray-900">
              {managersStatic.length}
            </p>
            <p className="text-xs text-gray-500 mt-1.5">{t("Managers")}</p>
          </div>
        </div>

        <div className="bg-[#f1efe8] rounded-xl p-5 flex items-center gap-4 hover:bg-[#ece9df] transition-colors">
          <div className="w-11 h-11 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
            <img src={Manager} alt="" className="w-5 h-5" />
          </div>

          <div>
            <p className="text-2xl font-semibold leading-none text-gray-900">
              {administratorsStatic.length}
            </p>
            <p className="text-xs text-gray-500 mt-1.5">{t("Administrator")}</p>
          </div>
        </div>

        <div className="bg-[#f1efe8] rounded-xl p-5 flex items-center gap-4 hover:bg-[#ece9df] transition-colors">
          <div className="w-11 h-11 rounded-full bg-violet-100 flex items-center justify-center shrink-0">
            <img src={Teachers} alt="" className="w-5 h-5" />
          </div>

          <div>
            <p className="text-2xl font-semibold leading-none text-gray-900">
              {teachersStatic.length}
            </p>
            <p className="text-xs text-gray-500 mt-1.5">{t("Teachers")}</p>
          </div>
        </div>

        <div className="bg-[#f1efe8] rounded-xl p-5 flex items-center gap-4 hover:bg-[#ece9df] transition-colors">
          <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
            <img src={Curator} alt="" className="w-5 h-5" />
          </div>

          <div>
            <p className="text-2xl font-semibold leading-none text-gray-900">
              {curatorsStatic.length}
            </p>
            <p className="text-xs text-gray-500 mt-1.5">{t("Curators")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default EmployeesBoard;
