import { apiFetch } from "../../../shared/api/api";


export interface AttendanceStudent {
  studentId: number;
  present: boolean;
}

export interface CreateAttendanceData {
  lessonId: number;
  date: string;
  students: AttendanceStudent[];
}

export const createAttendance = async (
  data: CreateAttendanceData,
) => {
  return apiFetch("/attendance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};