import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL:"https://koatm.duckdns.org",
  withCredentials: true
});

export default API;