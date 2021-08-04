import axios from "axios";

export const apiUrl = "http://127.0.0.1:5000";

const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
