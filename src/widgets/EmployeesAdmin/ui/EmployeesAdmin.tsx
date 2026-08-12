import { EmployeesCards } from "../../../features/EmployeesCards";
import { DashAdmin } from "../../DashAdmin";
import { EmployeesAll } from "../../EmployeesAll";
import { EmployeesBoard } from "../../EmployeesBoard";
import { Header } from "../../Header";
function EmployeesAdmin() {
  return (
    <>
      <div className="language-fade app-layout flex min-h-screen">
        <DashAdmin />

        <div className="ml-67 min-h-screen flex-1 flex flex-col bg-purple-700 ">
          <header className="header py-4 px-8 ">

            <Header />
          </header>

          <main className="content flex-1 bg-white py-6 px-8 overflow-x-auto">
            <EmployeesAll />
            <EmployeesBoard />
            <EmployeesCards />
          </main>
        </div>
      </div>
    </>
  );
}
export default EmployeesAdmin;
