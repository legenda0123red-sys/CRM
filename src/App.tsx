import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Registr } from "./pages/Registr";
import { Login } from "./pages/Login";
function App(){
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/registr" element={<Registr />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}
export default App