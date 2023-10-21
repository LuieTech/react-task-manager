import axios from "axios";

const service = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.REACT_APP_BASE_API_URL || "http://localhost:3000/v1",
});

export function login(data) {
  return service.post("/login", data).then((response) => response.data);
}

export function getTasks() {
  return service.get("/tasks").then((response) => response.data);
}
