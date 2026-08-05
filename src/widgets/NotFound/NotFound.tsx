import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
         <div className="min-h-screen flex items-center justify-center bg-slate-100 px-5">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl p-10 flex flex-col items-center">

        <h1 className="text-8xl font-black text-cyan-600">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 text-center mt-3 max-w-lg">
          Упс... Страница, которую вы пытаетесь открыть,
          не существует или была удалена.
        </p>

        <div className="text-8xl mt-10 animate-bounce">
          🚀
        </div>

        <div className="flex gap-4 mt-10">

          <Link
            to="/dashboard"
            className="px-8 py-3 rounded-xl bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition"
          >
            🏠 Dashboard
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            ← Back
          </button>

        </div>

      </div>
    </div>
        </>
    )
}
export default NotFound;