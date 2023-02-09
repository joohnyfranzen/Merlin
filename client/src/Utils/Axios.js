import axios from "axios";
import { store } from "..";

export default function Axios() {
  const { value } = store.getState().Auth;

  axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
  axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  axios.defaults.withCredentials = true;

  const http = axios.create({
    baseURL: "https://d8ce-131-100-93-3.sa.ngrok.io/",
    //baseURL: "http://192.168.0.117:3001/",

    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "x-access-token": `${value}`,
    },
  });
  return {
    http,
  };
}
