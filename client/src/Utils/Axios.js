import axios from "axios";
import { store } from "..";

export default function Axios() {
  const { value } = store.getState().Auth;

  const http = axios.create({
    baseURL: "https://6ec0-2804-15e4-8008-1400-8495-8ef6-82e5-1a26.sa.ngrok.io",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return {
    http,
  };
}
