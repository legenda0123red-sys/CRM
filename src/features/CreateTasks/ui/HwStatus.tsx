import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../app/store";
import { useEffect } from "react";
import { resetSuccess } from "../model/tasksSlice";
import '../HwStatus.scss'
function HwStatus() {
    const dispatch = useDispatch<AppDispatch>();
    const {loading, success, error} = useSelector((state: RootState) => state.createTaskReducer);

    useEffect(() => {
        if(success){
            const timer = setTimeout(() => {
                dispatch(resetSuccess())
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [success, dispatch])

    if (!loading && !success && !error) return null
  return (
  <>
  <div className="status-modal">
    {loading && (
        <>
        <div className="loader"></div>
        <p>Создние задания...</p>
        </>
    )}
    {success && (
        <>
        <div className="success-icon"></div>
        <p>Задание создано!</p>
        </>
    )}
    {error && (
        <>
        <div className="error-icon"></div>
        <p>Не удалось создать задание!</p>
        </>
    )}
  </div>
  
  </>
);
}
export default HwStatus;
