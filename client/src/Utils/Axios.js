import axios from "axios";
import { store } from "..";

export default function Axios() {
  const { value } = store.getState().Auth;

  const http = axios.create({
    baseURL: "https://ec32-131-100-93-3.sa.ngrok.io",
    //baseURL: "http://192.168.0.117:3001/",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE,OPTIONS",
      "Content-Type": "application/json",
    },
  });
  return {
    http,
  };
}
