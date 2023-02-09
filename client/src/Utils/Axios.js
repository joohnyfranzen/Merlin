import axios from "axios";
import { store } from "..";

export default function Axios() {
  const { value } = store.getState().Auth;

  const http = axios.create({
    baseURL: "https://2c7d-131-100-93-3.sa.ngrok.io",
    //baseURL: "http://192.168.0.117:3001/",

    headers: {
      "content-type": "application/json",
    },
  });
  return {
    http,
  };
}
