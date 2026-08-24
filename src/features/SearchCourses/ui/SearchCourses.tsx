import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import { search } from "../model/searchSlice";
import { useTranslation } from "react-i18next";

function SearchCourse() {
  const dispatch = useDispatch<AppDispatch>();

  const searchCourse = useSelector(
    (state: RootState) => state.searchReducer.search,
  );

  const {t, i18n} = useTranslation('controls')

  return (
    <input
    key={i18n.language}
      value={searchCourse}
      onChange={(e) => dispatch(search(e.target.value))}
      className="language-fade w-110 p-4 border rounded-lg dark:text-white "
      type="search"
      placeholder={`${t('search')} ...`}
    />
  );
}
export default SearchCourse;