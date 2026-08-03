import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import { searchStudents } from "../model/searchStudentsSlice";

function SearchStudents() {
    const dispatch = useDispatch<AppDispatch>();
    const Student = useSelector((state: RootState) => state.searchStudentsReducer.search);
  return (
    <>
      <input
      value={Student}
      onChange={(e) => dispatch(searchStudents(e.target.value))}
        className="w-105 p-4 border rounded-lg"
        type="search"
        placeholder="Поиск..."
      />
    </>
  );
}
export default SearchStudents;
