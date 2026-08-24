import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/store";
import { toggleTheme } from "../model/theme";


function Theme() {
  const dispatch = useDispatch();

  const theme = useSelector(
    (state: RootState) => state.themeReducer.theme
  );

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  }, [theme]);
  
  return (
    <button
      type="button"
      onClick={() => dispatch(toggleTheme())}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
export default Theme