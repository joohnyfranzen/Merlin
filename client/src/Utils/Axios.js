import axios from "axios";
import { store } from "..";

export default function Axios() {
  const { value } = store.getState().Auth;

  const http = axios.create({
    baseURL: "https://ba7c-2804-14c-5fe9-816a-8f3-4b46-4f33-41d4.sa.ngrok.io/",
    //baseURL: "http://192.168.0.117:3001/",
    headers: {
      "Content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "x-access-token": `${value}`,
    },
  });
  return {
    http,
  };
}
