import { Outlet } from "react-router-dom";
import { HeaderUser } from "../../HeaderUser";
import { DashTeacher } from "../../DashTeacher";

function DashLayoutTeacher() {
  return (
    <>
      <div className="language-fade app-layout flex min-h-screen bg-white dark:bg-gray-900">
        <DashTeacher />
        <div className="ml-67 flex min-h-screen flex-1 flex-col bg-purple-700 dark:bg-gray-800">
          <header className="header px-8 py-4">
            <HeaderUser />
          </header>

          <main className="content flex-1 overflow-x-auto bg-white px-8 py-6 dark:bg-gray-900">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
export default DashLayoutTeacher;
