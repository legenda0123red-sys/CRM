import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "../../../app/store";
import type { Status } from "../model/statusSlice";
import { changeStatus } from "../model/statusSlice";
import { useTranslation } from "react-i18next";

const statuses: Status[] = ["Active", "On leave", "Sick", "Inactive"];

const getStatusStyles = (status: Status) => {
  switch (status) {
    case "Active":
      return {
        wrapper: "bg-green-100 text-green-800",
        icon: "ti-circle-check",
      };

    case "On leave":
      return {
        wrapper: "bg-amber-100 text-amber-800",
        icon: "ti-beach",
      };

    case "Sick":
      return {
        wrapper: "bg-red-100 text-red-800",
        icon: "ti-medical-cross",
      };

    case "Inactive":
      return {
        wrapper: "bg-gray-100 text-gray-500",
        icon: "ti-user-off",
      };
  }
};

const EmployeesCards = () => {
  const { t, i18n } = useTranslation("employees");
  const dispatch = useDispatch<AppDispatch>();

  // Получаем сотрудников из Redux
  const employeeList = useSelector(
    (state: RootState) => state.statusReducer.employees,
  );

  const [openStatusId, setOpenStatusId] = useState<number | null>(null);

  const handleChangeStatus = (employeeId: number, newStatus: Status) => {
    dispatch(
      changeStatus({
        employeeId,
        status: newStatus,
      }),
    );

    setOpenStatusId(null);
  };

  return (
    <div
    key={i18n.language}
    className="cursor-pointer bg-white rounded-xl border border-gray-300 overflow-visible">
      <table className="w-full text-sm table-fixed border-collapse">
        <colgroup>
          <col className="w-[30%]" />
          <col className="w-[18%]" />
          <col className="w-[14%]" />
          <col className="w-[24%]" />
          <col className="w-[14%]" />
        </colgroup>

        <thead>
          <tr className="border-b border-gray-300">
            <th className="text-left font-medium text-gray-500 px-3 py-2.5">
              {t('Employee')}
            </th>

            <th className="text-left font-medium text-gray-500 px-3 py-2.5">
              {t('EmployeeRole')}
            </th>

            <th className="text-left font-medium text-gray-500 px-3 py-2.5">
              {t('EmployeeStudents')}
            </th>

            <th className="text-left font-medium text-gray-500 px-3 py-2.5">
              {t('EmployeeStatus')}
            </th>

            <th></th>
          </tr>
        </thead>

        <tbody>
          {employeeList.slice(0, 10).map((employee) => {
            const statusStyles = getStatusStyles(employee.status);

            return (
              <tr
                key={employee.id}
                className="border-b border-gray-300 last:border-b-0"
              >
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-6.5 h-6.5 rounded-full flex items-center justify-center text-[11px] font-medium shrink-0 ${employee.avatarClass}`}
                    >
                      {employee.initials ? (
                        employee.initials
                      ) : (
                        <i className="ti ti-user text-sm"></i>
                      )}
                    </div>

                    <div>
                      <p className="leading-none">{employee.name}</p>

                      {employee.email && (
                        <p className="text-xs text-gray-400 mt-0.5">
                          {employee.email}
                        </p>
                      )}
                    </div>
                  </div>
                </td>

                <td className="px-3 py-2.5">{employee.role}</td>

                <td className="px-3 py-2.5">
                  {employee.students === null ? (
                    <span className="text-gray-400">—</span>
                  ) : (
                    employee.students
                  )}
                </td>

                <td className="px-3 py-2.5">
                  <div className="relative inline-block">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenStatusId(
                          openStatusId === employee.id ? null : employee.id,
                        )
                      }
                      className={`inline-flex items-center gap-1.5 rounded-full text-xs pl-2 pr-2.5 py-1 ${statusStyles.wrapper}`}
                    >
                      <i className={`ti ${statusStyles.icon} text-sm`}></i>

                      {employee.status}

                      <i
                        className={`ti ${
                          openStatusId === employee.id
                            ? "ti-chevron-up"
                            : "ti-chevron-down"
                        } text-xs`}
                      ></i>
                    </button>

                    {openStatusId === employee.id && (
                      <div className="absolute left-0 top-full mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-1">
                        {statuses.map((status) => {
                          const styles = getStatusStyles(status);

                          return (
                            <button
                              key={status}
                              type="button"
                              onClick={() =>
                                handleChangeStatus(employee.id, status)
                              }
                              className={`cursor-pointer w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-left hover:bg-gray-50 ${
                                employee.status === status
                                  ? "bg-gray-50 font-medium"
                                  : ""
                              }`}
                            >
                              <i
                                className={`ti ${styles.icon} ${styles.wrapper} rounded-full p-1`}
                              ></i>

                              {status}

                              {employee.status === status && (
                                <i className="ti ti-check ml-auto text-green-600"></i>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </td>

                <td className="px-3 py-2.5 text-right">
                  {employee.id === 4 ? (
                    <button className="text-xs text-gray-500 hover:text-gray-800 underline underline-offset-2">
                      {t('Send again')}
                    </button>
                  ) : (
                    <i className="ti ti-chevron-right text-gray-400"></i>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesCards;
