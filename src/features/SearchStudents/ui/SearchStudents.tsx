import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import { searchStudents } from "../model/searchStudentsSlice";
import { useTranslation } from "react-i18next";

function SearchStudents() {
    const dispatch = useDispatch<AppDispatch>();
    const Student = useSelector((state: RootState) => state.searchStudentsReducer.search);
    const {t, i18n} = useTranslation('controls');
  return (
    <>
      <input
      key={i18n.language}
      value={Student}
      onChange={(e) => dispatch(searchStudents(e.target.value))}
        className="language-fade w-105 p-4 border rounded-lg"
        type="search"
        placeholder={`${t('search')} ...`}
      />
    </>
  );
}
export default SearchStudents;
