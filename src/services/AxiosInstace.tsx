import axios from "axios";

const baseURL = "/dms/api/v1/inventory/";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export default axios.create({
  baseURL,
  headers,
});
