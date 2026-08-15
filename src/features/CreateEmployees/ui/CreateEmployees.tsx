import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import { closeEmployeesW } from "../model/createEmployees";
import { useTranslation } from "react-i18next";

function CreateEmployees() {
  const { t } = useTranslation("employees");
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector(
    (state: RootState) => state.createEmployeesReducer.open,
  );

  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black/45 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl px-6 py-10 w-120  border border-gray-300">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xl font-bold">{t("NewEmployee")}</h3>
            <button
              onClick={() => dispatch(closeEmployeesW())}
              className="cursor-pointer text-lg font-extrabold"
            >
              X
            </button>
          </div>

          <label className="text-sm text-gray-500 block mb-1">
            {t("InfoEmployee")}
          </label>
          <input
            type="text"
            placeholder="Например, Иван Петров"
            className="cursor-pointer w-full h-9 px-3 mb-3 rounded-lg border border-gray-300 text-sm"
          />

          <label className="text-sm text-gray-500 block mb-1">
            {t("Email")}
          </label>
          <input
            type="email"
            placeholder="name@company.com"
            className="cursor-pointer w-full h-9 px-3 mb-3 rounded-lg border border-gray-300 text-sm"
          />

          <label className="text-sm text-gray-500 block mb-1">
            {t("EmployeeRole")}
          </label>
          <div className="relative mb-3">
            <select
              defaultValue=""
              className=" w-full h-9 px-3 pr-8 rounded-lg border border-gray-300 text-sm appearance-none bg-white cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-gray-800/10 focus:border-gray-400 hover:border-gray-400"
            >
              <option className="font-semibold text-gray-600" value="" disabled>
                {t("SelectRole")}
              </option>
              <option className="font-semibold text-gray-600">{t("Manager")} </option>
              <option className="font-semibold text-gray-600">{t("Teacher")}</option>
              <option className="font-semibold text-gray-600">{t("Curator")}</option>
              <option className="font-semibold text-gray-600">{t("Administrator")}</option>
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none cursor-pointer">
              ▼
            </span>
          </div>

          <div className="flex items-start gap-2 bg-[#f1efe8] rounded-lg p-3 mb-5">
            <p className="text-xs text-gray-500 leading-relaxed">
              {t("EmailMessage")}
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => dispatch(closeEmployeesW())}
              className="flex-1 h-9 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 cursor-pointer"
            >
              {t("Cancel")}
            </button>
            <button className="flex-1 h-9 rounded-lg bg-gray-900 text-white text-sm flex items-center justify-center gap-1.5 hover:bg-gray-800 cursor-pointer">
              <p className="ti ti-send text-sm">{t("SendGmail")}</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateEmployees;
