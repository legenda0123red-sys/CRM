import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import {
  addEmployee,
  closeEmployeesW,
  type ICreateEmployees,
  type IMessage,
} from "../model/createEmployees";
import { useTranslation } from "react-i18next";
import { useState } from "react";


function CreateEmployees() {
  const {i18n, t } = useTranslation("employees");
  const dispatch = useDispatch<AppDispatch>();
  const [employee, setEmployee] = useState<ICreateEmployees>({
    fullName: "",
    email: "",
    role: "",
  });
  const isOpen = useSelector(
    (state: RootState) => state.createEmployeesReducer.open,
  );
  const [message, setMessage] = useState<IMessage>({
    text: "",
    color: "",
  });

  function showMessage(text: string, color: string) {
    setMessage({ text: text, color: color });
    setTimeout(() => {
      setMessage({ text: "", color: "" });
    }, 2000);
  }

  function SendDataEmployee() {
    if (!employee.fullName || !employee.email || !employee.role) {
      showMessage("inputs are empty", "red");
      return;
    }

    if (!employee.email.includes("@")) {
      showMessage("You forgot write the @", "red");
      return;
    }

    dispatch(addEmployee(employee));
    showMessage("Succesful!", "green");
  }

  if (!isOpen) return null;
  return (
    <>
      <div
      key={i18n.language}
      className="language-fade fixed inset-0 bg-black/45 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl px-6 py-10 w-120  border border-gray-300 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-xl font-bold dark:text-white">{t("NewEmployee")}</h3>
            <button
              onClick={() => dispatch(closeEmployeesW())}
              className="cursor-pointer text-lg font-extrabold dark:text-white"
            >
              X
            </button>
          </div>

          <label className="text-sm text-gray-500 block mb-1 dark:text-white">
            {t("InfoEmployee")}
          </label>
          <input
            value={employee.fullName}
            onChange={(e) =>
              setEmployee({ ...employee, fullName: e.target.value })
            }
            type="text"
            required
            placeholder="Например, Иван Петров"
            className="cursor-pointer w-full h-9 px-3 mb-3 rounded-lg border border-gray-300 text-sm dark:text-slate-400 dark:font-semibold dark:placeholder:text-white"
          />

          <label className="text-sm text-gray-500 block mb-1 dark:text-white">
            {t("Email")}
          </label>
          <input
            value={employee.email}
            onChange={(e) =>
              setEmployee({ ...employee, email: e.target.value })
            }
            type="email"
            required
            placeholder="name@company.com"
            className="cursor-pointer w-full h-9 px-3 mb-3 rounded-lg border border-gray-300 text-sm dark:text-slate-400 dark:font-semibold dark:placeholder:text-white"
          />

          <label className="text-sm text-gray-500 block mb-1">
            {t("EmployeeRole")}
          </label>
          <div className="relative mb-3">
            <select
              onChange={(e) =>
                setEmployee({
                  ...employee,
                  role: e.target.value as ICreateEmployees["role"],
                })
              }
              required
              defaultValue=""
              className=" w-full h-9 px-3 pr-8 rounded-lg border border-gray-300 text-sm appearance-none bg-white cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-gray-800/10 focus:border-gray-400 hover:border-gray-400"
            >
              <option className="font-semibold text-gray-600" value="" disabled>
                {t("SelectRole")}
              </option>
              <option className="font-semibold text-gray-600" value="Менеджер продаж">
                {t("Manager")}{" "}
              </option>
              <option className="font-semibold text-gray-600" value="Преподаватель">
                {t("Teacher")}
              </option>
              <option className="font-semibold text-gray-600" value="Куратор">
                {t("Curator")}
              </option>
              <option className="font-semibold text-gray-600" value="Администратор">
                {t("Administrator")}
              </option>
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
              className="flex-1 h-9 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 cursor-pointer dark:bg-cyan-800 dark:hover:bg-cyan-700 dark:text-white"
            >
              {t("Cancel")}
            </button>
            <button
              onClick={SendDataEmployee}
              className="flex-1 h-9 rounded-lg bg-gray-900 text-white text-sm flex items-center justify-center gap-1.5 hover:bg-gray-800 cursor-pointer dark:hover:bg-gray-950"
            >
              <p className="ti ti-send text-sm">{t("SendGmail")}</p>
            </button>
          </div>
          <p
            className="text-center mt-4 font-semibold "
            style={{ color: message.color }}
          >
            {message.text}
          </p>
        </div>
      </div>
    </>
  );
}

export default CreateEmployees;
