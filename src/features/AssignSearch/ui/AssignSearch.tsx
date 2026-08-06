import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import { SearchAssignStudent } from "../model/AssignSearchSlice";

function AssignSearch(){
    const searchStudent = useSelector((state: RootState) => state.AssignSearchReducer.search);
    const dispatch = useDispatch<AppDispatch>();
    return(
        <>
         <input
         value={searchStudent}
         onChange={(e) => dispatch(SearchAssignStudent(e.target.value))}
        type="search"
        placeholder="Поиск студента..."
        className="
          w-full
          px-4
          py-3
          rounded-xl
          border
          border-gray-200
          outline-none
          focus:ring-2
          focus:ring-cyan-500
        "
      />
        </>
    )
}
export default AssignSearch;