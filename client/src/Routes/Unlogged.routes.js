import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home/UnloggedHome/UnloggedHome";
import Login from "../Screens/Login/Login";
import Register from "../Screens/Register/Register";

export default function Unlogged() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes>
    </Router>
  );
}
