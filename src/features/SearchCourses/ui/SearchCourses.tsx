import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import { search } from "../model/searchSlice";

function SearchCourse() {
  const dispatch = useDispatch<AppDispatch>();

  const searchCourse = useSelector(
    (state: RootState) => state.searchReducer.search,
  );

  return (
    <input
      value={searchCourse}
      onChange={(e) => dispatch(search(e.target.value))}
      className="w-105 p-4 border rounded-lg"
      type="search"
      placeholder="Поиск..."
    />
  );
}
export default SearchCourse;