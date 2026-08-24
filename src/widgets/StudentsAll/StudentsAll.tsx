import { useTranslation } from "react-i18next";
import { CreateStudents } from "../../features/CreateStudents";
import { SearchStudents } from "../../features/SearchStudents";
import { AddStudentBtn } from "../AddStudentBtn";
import StudentsCard from "../../entities/student/ui/StudentCard";


function StudentsAll() {
  const {t, i18n} = useTranslation('controls')
  return (
    <>
      <section className="students">
        <div className="students__menu mb-10 flex justify-between items-center">
          <h2
          key={i18n.language}
          className="language-fade students__title dark:text-white  text-2xl font-bold">{t('studentsTitle')}</h2>
          <SearchStudents />
          <AddStudentBtn />
          <CreateStudents />
        </div>
        <div className="students-list flex flex-wrap gap-5">
          <StudentsCard />
        </div>
      </section>
    </>
  );
}
export default StudentsAll;
