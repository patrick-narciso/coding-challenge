import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://cove-coding-challenge-api.herokuapp.com",
});

export default axiosInstance;
