import axios from "axios";

const userRepository = axios.create({
  baseURL: "/usuario",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default userRepository;
