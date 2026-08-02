import { Create } from "../../features/CreateCourse";
import { Search } from "../../features/SearchCourses";
import { AddCourseBtn } from "../AddCourseBtn";
import { CourseAdmin } from "../CourseAdmin";

function CoursesAdmin() {
  return (
    <>
      <section className="course">
        <div className="course-menu mb-10 flex justify-between items-center">
          <h2 className="course__title  text-2xl font-bold ">Courses</h2>
          <Search />
          <AddCourseBtn />
          <Create />
        </div>
        <div className="course-list flex gap-3 flex-wrap">
          <CourseAdmin />
        </div>
      </section>
    </>
  );
}
export default CoursesAdmin;
