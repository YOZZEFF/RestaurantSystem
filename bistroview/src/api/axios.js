import axios from 'axios'



const baseURL = "http://127.0.0.1:8000/api";

export const getToken = () => localStorage.getItem("token") ?? '';

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

export default axios.create({
  baseURL,
  headers: { Authorization: getAuthorizationHeader() },
});