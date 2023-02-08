import axios from "axios";
import { store } from "..";

export default function Axios() {
  const { value } = store.getState().Auth;

  const http = axios.create({
    baseURL: "merlin-api.vercel.app/",
    //baseURL: "http://192.168.0.117:3001/",
    headers: {
      "Content-type": "application/json",
      "x-access-token": `${value}`,
    },
  });
  return {
    http,
  };
}
