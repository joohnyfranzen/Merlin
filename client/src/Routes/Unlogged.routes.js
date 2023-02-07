import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/UnloggedNavbar";
import Home from "../Screens/Home/Home";
import Login from "../Screens/Login/Login";
import Register from "../Screens/Register/Register";

export default function Unlogged() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registro" element={<Register/>}/>
            </Routes>
        </Router>
    )
}