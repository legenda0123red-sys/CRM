import { DashAdmin } from "../../DashAdmin";
import { Header } from "../../Header";
import { StudentsAll } from "../../StudentsAll";
import { TotalAdmin } from "../../TotalAdmin";

function StudentsAdmin() {
  return (
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
            <StudentsAll />
          </main>
        </div>
      </div>
    </>
  );
}
export default StudentsAdmin;
