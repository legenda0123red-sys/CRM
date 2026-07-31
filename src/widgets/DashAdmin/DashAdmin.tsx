import icons from "../../shared/icons/dashboard.png";
function DashAdmin() {
  return (
    <>
      <aside className=" w-70 shrink-0 bg-purple-700 text-white py-6 px-4">
        <div className="flex justify-between items-center">
          <i className="fi fi-sr-graduation-cap text-4xl text-purple-500"></i>
          <h1 className="text-xl font-bold ">CourseFlow</h1>
        </div>

        <div className="mt-12.5 flex flex-col gap-5 ">
          <div className="dash flex items-center gap-3 p-2.5 border-2 rounded-lg cursor-pointer  hover:bg-blue-900  transition">
            <img className="w-10 h-10" src={icons} alt="" />
            <button className="text-2xl font-bold text-white ">
              Dashboard
            </button>
          </div>

          <div className="dash flex items-center gap-3 p-2.5 border-2 rounded-lg cursor-pointer hover:bg-blue-900 transition">
            <img className="w-10 h-10" src={icons} alt="" />
            <button className="text-2xl font-bold text-white">Students</button>
          </div>

          <div className="dash flex items-center gap-3 p-2.5 border-2 rounded-lg cursor-pointer hover:bg-blue-900 transition">
            <img className="w-10 h-10" src={icons} alt="" />
            <button className="text-2xl font-bold text-white">Course</button>
          </div>

          <div className="dash flex items-center gap-3 p-2.5 border-2 rounded-lg cursor-pointer hover:bg-blue-900 transition">
            <img className="w-10 h-10" src={icons} alt="" />
            <button className="text-2xl font-bold text-white">Chat</button>
          </div>
        </div>

        <div className="mt-30">
          <div className="dash flex items-center gap-3 p-2.5 border-2 rounded-lg cursor-pointer hover:bg-blue-900 transition">
            <img className="w-10 h-10" src={icons} alt="" />
            <button className="text-2xl font-bold text-white">Settings</button>
          </div>
        </div>
        <div className="circle flex justify-center">
          <div className="acc w-20 h-20 rounded-full bg-white mt-2.5 flex justify-center">
            
          </div>
        </div>
      </aside>
    </>
  );
}
export default DashAdmin;
