import { useSelector } from "react-redux";

import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { RootState } from "../../../app/store";


function StudentsCard() {
  const {t, i18n} = useTranslation('course')
    const students = useSelector((state: RootState) => state.studentReducer.students);

    const searchStudents = useSelector((state: RootState) => state.searchStudentsReducer.search);

    const findStudents = useMemo(() => {
      const query = searchStudents.trim().toLowerCase();
      if (!query) return students;
      return students.filter((student) => (
        student.name.trim().toLowerCase().includes(query)
      ))
    }, [students, searchStudents])

    if (findStudents.length === 0) {
      return(
        <div 
        key={i18n.language}
        className="ml-128">
        <p className="language-fade text-gray-500 font-bold dark:text-white">{t('NotFoundStudents')}</p>
      </div>
      );
    }
  return (
    <>
     {findStudents && findStudents.slice(0, 10).map((item) => (
         <div
         key={i18n.language}
         className="language-fade w-70 dark:bg-zinc-700 dark:border-gray-700 dark:hover:shadow-cyan-900  bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300">
        
        <div className="bg-linear-to-r from-indigo-500 to-purple-600 h-28 relative  rounded-lg">
          <div className="absolute -bottom-10 left-6">
            <div className="w-20 h-20 rounded-full bg-white p-1 shadow-lg">
              <div className="w-full h-full rounded-full bg-linear-to-r from-cyan-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                {item.name[0].toUpperCase()} {item.username[0].toUpperCase()}
              </div>
            </div>
          </div> 
        </div>

        <div className="pt-14 px-6 pb-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="dark:text-white text-xl font-bold text-gray-800">
                {item.name} {item.username}
              </h2>
            </div>

         
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-600 dark:text-white dark:bg-green-700">
              Active
            </span>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                📱
              </div> 

              <div>
                <p className="text-xs text-gray-400 dark:text-white">{t('phone')}</p>

                <p className="font-medium text-gray-700 dark:text-white">+{item.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center ">
                👨‍👩‍👦
              </div>

              <div>
                <p className="text-xs text-gray-400 dark:text-white">{t('ParentsPhone')}</p>

                <p className="font-medium text-gray-700 dark:text-white">+{item.parentsPhone}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center ">
                🎓
              </div>

              <div>
                <p className="text-xs text-gray-400 dark:text-white">{t('Course')}</p>

                <p className="font-medium text-gray-700 dark:text-white">{item.courses}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     ))}
    </>
  );
}
export default StudentsCard;
