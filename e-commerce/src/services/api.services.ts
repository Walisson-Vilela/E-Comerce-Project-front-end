import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(BASE_URL); 

export async function get(url) {
  return axios.get(BASE_URL + url);
}
export async function post(url) {
  return axios.post(BASE_URL + url);
}
