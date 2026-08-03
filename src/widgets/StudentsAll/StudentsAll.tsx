import { CreateStudents } from "../../features/CreateStudents";
import { SearchStudents } from "../../features/SearchStudents";
import { AddStudentBtn } from "../AddStudentBtn";
import StudentsCard from "../StudentsCard/StudentsCard";

function StudentsAll() {
  return (
    <>
      <section className="students">
        <div className="students__menu mb-10 flex justify-between items-center">
          <h2 className="students__title  text-2xl font-bold">Students</h2>
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
