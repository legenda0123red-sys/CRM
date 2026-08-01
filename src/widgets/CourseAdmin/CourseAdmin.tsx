function CourseAdmin() {
  return (
    <>
      <section className="course">
        <h2 className="course__title mb-10 text-2xl font-bold ">Courses</h2>

        <div className="course__list">
          <div className="course__item bg-white rounded-lg p-4 shadow w-65 flex flex-col gap-5 cursor-pointer">
            <img
              className="course__image w-65 h-32 object-cover"
              src=""
              alt=""
            />
            <div className="course__desc flex flex-col gap-3">
              <h3 className="course__name text-xl font-bold ">
                Python Basic Live
              </h3>
              <span className="course__price text-gray-500">$149.00</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default CourseAdmin;
