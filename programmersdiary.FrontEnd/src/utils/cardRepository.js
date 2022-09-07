import axios from "axios";

const cardRepository = axios.create({
  baseURL: "https://localhost:7169/api",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default cardRepository;
