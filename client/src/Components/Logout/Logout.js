import { Navigate, useNavigate } from "react-router-dom";
import { store } from "../..";

export default function Logout() {
  const navigate = useNavigate();
  store.dispatch({ type: "SET_TOKEN_OUT" });
  localStorage.removeItem("token");
  store.dispatch({ type: "SET_ID_OUT" });
  localStorage.removeItem("userId");

  return <Navigate to="/" />;
}
