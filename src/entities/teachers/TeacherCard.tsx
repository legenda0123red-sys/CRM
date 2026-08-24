function TeacherCard() {
    return(
        <>
        <div className="flex items-center gap-4 p-3 rounded-xl border hover:bg-gray-100 bg-white dark:bg-purple-800 dark:hover:bg-purple-700 dark:border-cyan-500">
              <img
                src=""
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <h3 className="font-bold dark:text-white">John Smith</h3>

                <p className="text-sm text-gray-500 dark:text-white">Senior React Developer</p>
              </div>
            </div>
        </>
    )
}
export default TeacherCard;