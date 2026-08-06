import { DashAdmin } from "../../../widgets/DashAdmin";
import { Header } from "../../../widgets/Header";
import { OneCourseCard } from "../../../widgets/OneCourseCard";
import { TotalAdmin } from "../../../widgets/TotalAdmin";
import { AssignStudent } from "../../AssignStudent";
function OneCourse() {
    return(
        <>
        <div className="app-layout flex min-h-screen">
        {/* <!-- Dashboard, Students, Course, Chat и т.д. --> */}
        <DashAdmin />

        <div className="ml-67 min-h-screen flex-1 flex flex-col bg-purple-700 ">
          <header className="header py-4 px-8 ">
            {/* поиск, аватар, уведомления и т.д. */}
            <Header />
          </header>

          <main className="content flex-1 bg-white py-6 px-8 overflow-x-auto">
            {/* только таблица студентов и подобный контент */}
            <TotalAdmin />
            <AssignStudent />
            <section className="oneCourse-card">
              <OneCourseCard />
            </section>
          </main>
        </div>
      </div>
        </>
    )
}
export default OneCourse;