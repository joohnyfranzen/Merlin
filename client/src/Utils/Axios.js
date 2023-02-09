import axios from "axios";
import { store } from "..";

export default function Axios() {
  const { value } = store.getState().Auth;

  const http = axios.create({
    baseURL: "https://6ec0-2804-15e4-8008-1400-8495-8ef6-82e5-1a26.sa.ngrok.io",
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
