import axios from "axios";
import { store } from "..";

export default function Axios() {
  const { value } = store.getState().Auth;

  const http = axios.create({
    baseURL: "https://26a0-2804-14c-5fe9-816a-8f3-4b46-4f33-41d4.sa.ngrok.io/",
    //baseURL: "http://192.168.0.117:3001/",
    withCredentials: false,
    mode: "no-cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
      'Content-Type': 'application/x-www-form-urlencoded'
      "x-access-token": `${value}`,
      
    },
  });
  return {
    http,
  };
}
