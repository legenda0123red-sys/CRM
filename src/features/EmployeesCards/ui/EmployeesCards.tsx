import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import type { RootState, AppDispatch } from "../../../app/store";
import type { Status } from "../model/statusSlice";

import { changeStatus } from "../model/statusSlice";
import {
  changeRole,
  type ICreateEmployees,
} from "../../CreateEmployees/model/createEmployees";

const statuses: Status[] = ["Active", "On leave", "Sick", "Inactive"];

const roles: ICreateEmployees["role"][] = [
  "",
  "Менеджер",
  "Преподаватель",
  "Куратор",
  "Администратор",
];

const roleTranslationKeys: Record<ICreateEmployees["role"], string> = {
  "": "",
  Менеджер: "Manager",
  Преподаватель: "Teacher",
  Куратор: "Curator",
  Администратор: "Administrator",
};

const getStatusStyles = (status: Status) => {
  switch (status) {
    case "Active":
      return {
        wrapper:
          "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20",
        icon: "ti-circle-check",
      };

    case "On leave":
      return {
        wrapper:
          "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20",
        icon: "ti-beach",
      };

    case "Sick":
      return {
        wrapper:
          "bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20",
        icon: "ti-medical-cross",
      };

    case "Inactive":
      return {
        wrapper:
          "bg-gray-100 text-gray-500 ring-1 ring-inset ring-gray-400/20",
        icon: "ti-user-off",
      };
  }
};

const getInitials = (fullName: string) =>
  fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

const EmployeesCards = () => {
  const { t, i18n } = useTranslation("employees");

  const dispatch = useDispatch<AppDispatch>();

  const employeeList = useSelector(
    (state: RootState) => state.createEmployeesReducer.list,
  );

  const statusById = useSelector(
    (state: RootState) => state.statusReducer.byEmployeeId,
  );

  const [openStatusId, setOpenStatusId] = useState<number | null>(null);
  const [openRoleId, setOpenRoleId] = useState<number | null>(null);

  const handleChangeStatus = (
    employeeId: number,
    newStatus: Status,
  ) => {
    dispatch(changeStatus({ employeeId, status: newStatus }));
    setOpenStatusId(null);
  };

  const handleChangeRole = (
    employeeId: number,
    newRole: ICreateEmployees["role"],
  ) => {
    dispatch(changeRole({ employeeId, role: newRole }));
    setOpenRoleId(null);
  };

  return (
    <div key={i18n.language} className="flex flex-col gap-3">
      {employeeList.slice(0, 10).map((employee) => {
        if (!employee.id) return null;

        const status = statusById[employee.id] ?? "Inactive";
        const statusStyles = getStatusStyles(status);

        return (
          <div
            key={employee.id}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white p-3.5 shadow-sm transition-all duration-200 hover:border-gray-300 hover:shadow-md"
          >
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-800">
                {getInitials(employee.fullName) || (
                  <i className="ti ti-user text-base"></i>
                )}
              </div>

              <div className="min-w-0">
                <p className="truncate font-medium leading-tight">
                  {employee.fullName}
                </p>

                <p className="mt-0.5 truncate text-xs text-gray-400">
                  {employee.email}
                </p>
              </div>
            </div>

            <div className="hidden w-40 shrink-0 text-sm sm:block">
              <p className="mb-0.5 text-xs text-gray-400">
                {t("EmployeeRole")}
              </p>

              <div className="relative inline-block">
                <button
                  type="button"
                  onClick={() =>
                    setOpenRoleId(
                      openRoleId === employee.id
                        ? null
                        : employee.id!,
                    )
                  }
                  className="inline-flex items-center gap-1 text-left hover:text-gray-600"
                >
                  <span className="truncate">
                    {employee.role
                      ? t(roleTranslationKeys[employee.role])
                      : "—"}
                  </span>

                  <i
                    className={`ti ${
                      openRoleId === employee.id
                        ? "ti-chevron-up"
                        : "ti-chevron-down"
                    } shrink-0 text-xs`}
                  ></i>
                </button>

                {openRoleId === employee.id && (
                  <div className="absolute left-0 top-full z-50 mt-2 w-48 rounded-lg border border-gray-200 bg-white p-1 shadow-lg">
                    {roles.map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() =>
                          handleChangeRole(employee.id!, role)
                        }
                        className={`flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-left text-sm hover:bg-gray-50 ${
                          employee.role === role
                            ? "bg-gray-50 font-medium"
                            : ""
                        }`}
                      >
                        {t(roleTranslationKeys[role])}

                        {employee.role === role && (
                          <i className="ti ti-check ml-auto text-green-600"></i>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="w-36 shrink-0 text-sm">
              <p className="mb-0.5 text-xs text-gray-400">
                {t("EmployeeStatus")}
              </p>

              <div className="relative inline-block">
                <button
                  type="button"
                  onClick={() =>
                    setOpenStatusId(
                      openStatusId === employee.id
                        ? null
                        : employee.id!,
                    )
                  }
                  className={`inline-flex items-center gap-1.5 rounded-full pl-2.5 pr-2 py-1 text-xs ${statusStyles.wrapper}`}
                >
                  <i
                    className={`ti ${statusStyles.icon} text-sm`}
                  ></i>

                  {status}

                  <i
                    className={`ti ${
                      openStatusId === employee.id
                        ? "ti-chevron-up"
                        : "ti-chevron-down"
                    } text-xs`}
                  ></i>
                </button>

                {openStatusId === employee.id && (
                  <div className="absolute left-0 top-full z-50 mt-2 w-44 rounded-lg border border-gray-200 bg-white p-1 shadow-lg">
                    {statuses.map((s) => {
                      const styles = getStatusStyles(s);

                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() =>
                            handleChangeStatus(employee.id!, s)
                          }
                          className={`flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-left text-sm hover:bg-gray-50 ${
                            status === s
                              ? "bg-gray-50 font-medium"
                              : ""
                          }`}
                        >
                          <i
                            className={`ti ${styles.icon} ${styles.wrapper} rounded-full p-1`}
                          ></i>

                          {s}

                          {status === s && (
                            <i className="ti ti-check ml-auto text-green-600"></i>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <i className="ti ti-chevron-right shrink-0 text-gray-300 transition-colors group-hover:text-gray-500"></i>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeesCards;