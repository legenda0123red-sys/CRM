function TeacherCard() {
    return(
        <>
        <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100">
              <img
                src="https://i.pravatar.cc/150?img=11"
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <h3 className="font-bold">John Smith</h3>

                <p className="text-sm text-gray-500">Senior React Developer</p>
              </div>
            </div>
        </>
    )
}
export default TeacherCard;