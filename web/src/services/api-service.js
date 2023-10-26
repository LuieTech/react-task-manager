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

export function logoutApi() {
  return service.post("/logout");
}

export function createUser(body) {
  const formData = new FormData();

  formData.append("name", body.name);
  formData.append("email", body.email);
  formData.append("password", body.password);

  if (body.avatar) {
    formData.append("avatar", body.avatar[0]);
  }

  return service.post("/users", formData);
}
