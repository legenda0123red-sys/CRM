import { CreateStudents } from "../../features/CreateStudents";
import { AddStudentBtn } from "../AddStudentBtn";

function StudentsAll() {
  return (
    <>
      <section className="students">
        <div className="students__menu mb-10 flex justify-between items-center">
          <h2 className="students__title  text-2xl font-bold">Students</h2>
          <AddStudentBtn />
          <CreateStudents />
        </div>
      </section>
    </>
  );
}
export default StudentsAll;
