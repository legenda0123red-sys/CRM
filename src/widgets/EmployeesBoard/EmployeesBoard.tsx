import { useTranslation } from "react-i18next";
import { Manager, Curator, Teachers } from "../../shared/icons/icons";
function EmployeesBoard() {
    const {t, i18n} = useTranslation('employees')
  return (
    <>

      <div
      key={i18n.language}
      className="language-fade grid grid-cols-3 gap-3 mb-6">
        <div className="bg-[#f1efe8] rounded-lg p-10 flex items-center gap-3 justify-between">
          <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center shrink-0">
            <i className="ti ti-headset text-lg">
                <img src={Manager} alt="" />
            </i>
          </div>
          <div className="text-center">
            <p className="text-xl font-medium leading-none">5</p>
            <p className="text-xs text-gray-500 mt-1">{t('Managers')}</p>
          </div>
        </div>
        <div className="bg-[#f1efe8] rounded-lg p-4 flex items-center gap-3 justify-between">
          <div className="w-9 h-9 rounded-full bg-violet-100 text-violet-800 flex items-center justify-center shrink-0">
            <i className="ti ti-school text-lg">
                <img src={Teachers} alt="" />
            </i>
          </div>
          <div className="text-center">
            <p className="text-xl font-medium leading-none">4</p>
            <p className="text-xs text-gray-500 mt-1">{t('Teachers')}</p>
          </div>
        </div>
        <div className="bg-[#f1efe8] rounded-lg p-4 flex items-center gap-3 justify-between">
          <div className="w-9 h-9 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
            <i className="ti ti-user-check text-lg">
                <img src={Curator} alt="" />
            </i>
          </div>
          <div className="text-center">
            <p className="text-xl font-medium leading-none">3</p>
            <p className="text-xs text-gray-500 mt-1">{t('Curators')}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default EmployeesBoard;
