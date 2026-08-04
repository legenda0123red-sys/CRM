import { Routes, Route } from "react-router-dom";
import { Registr } from "./pages/Registr";
import { Login } from "./pages/Login";
import { StudentsAdmin } from "./widgets/StudentsAdmin";
import { Home } from "./pages/Home";
import { OneCourse } from "./features/OneCourse";
function App(){
    return (
        <Routes>
            <Route path="/dashboard" element={<Home />}/>
            <Route path="/students" element={<StudentsAdmin />}/>
            <Route path="/chat" element={<StudentsAdmin />}/>
            <Route path="/course" element={<StudentsAdmin />}/>
            <Route path="/settings" element={<StudentsAdmin />}/>
            <Route path="/registr" element={<Registr />}/>
            <Route path="/dashboard/course/:id" element={<OneCourse />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}
export default App