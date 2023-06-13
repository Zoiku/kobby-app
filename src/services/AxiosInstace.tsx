import axios from "axios";

const baseURL = "";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

const AxiosInstance = axios.create({
  baseURL,
  headers,
});

export default AxiosInstance;
