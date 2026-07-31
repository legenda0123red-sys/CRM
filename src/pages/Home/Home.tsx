import { DashAdmin } from "../../widgets/widjets";
function Home() {
  return (
    <>
      <div className="app-layout flex min-h-screen">
        {/* <!-- Dashboard, Students, Course, Chat и т.д. --> */}
        <DashAdmin />

        <main className="content flex-1 bg-white py-6 px-8 overflow-x-auto ">
          {/* <!-- Header, таблица студентов и т.д. --> */}
        </main>
      </div>
    </>
  );
}
export default Home;
