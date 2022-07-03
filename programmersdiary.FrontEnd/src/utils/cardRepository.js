import axios from "axios";

const cardRepository = axios.create({
  baseURL: "/card",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default cardRepository;
