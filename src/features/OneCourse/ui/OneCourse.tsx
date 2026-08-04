import { useLocation } from "react-router-dom";
import type { ICourse } from "../../CreateCourse/model/createSlice";
import { DashAdmin } from "../../../widgets/DashAdmin";


function OneCourse() {
    const location = useLocation();
    const course: ICourse = location.state;

    if (!course) {
        return <div>Данные не найдены. Откройте страницу через список курсов.</div>;
    }
    return(
        <>
        <DashAdmin />
      
        </>
    )
}
export default OneCourse;