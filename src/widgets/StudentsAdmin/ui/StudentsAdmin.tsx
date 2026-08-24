import { DashAdmin } from "../../DashAdmin";
import { Header } from "../../Header";
import { StudentsAll } from "../../StudentsAll";
import { TotalAdmin } from "../../TotalAdmin";

function StudentsAdmin() {
  return (
    <>
      <div className="language-fade app-layout flex min-h-screen bg-white dark:bg-gray-900">
        <DashAdmin />

        <div className="ml-67 min-h-screen flex-1 flex flex-col bg-purple-700 dark:bg-gray-800">
          <header className="header py-4 px-8 ">

            <Header />
          </header>

          <main className="content flex-1 bg-white py-6 px-8 overflow-x-auto dark:bg-gray-900">
            <TotalAdmin /> 
            <StudentsAll />
          </main>
        </div>
      </div>
    </>
  );
}
export default StudentsAdmin;
