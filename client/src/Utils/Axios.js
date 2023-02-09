import axios from "axios";
import { store } from "..";

export default function Axios() {
  const { value } = store.getState().Auth;

  const http = axios.create({
    baseURL: "https://merlin-api.vercel.app",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": `${value}`,
    },
  });
  return {
    http,
  };
}
