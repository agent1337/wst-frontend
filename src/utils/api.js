import axios from "axios";
export const accessToken = localStorage.getItem("accessToken");

export default axios.create({
  baseURL: `http://localhost:4040/`,
  headers: { Authorization: `Bearer ${accessToken}` },
  responseType: 'json'
});

