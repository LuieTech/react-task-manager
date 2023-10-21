import { Navigate, Route, Routes } from "react-router-dom";
import TaskList from "./pages/tasks/list";
import TaskDetail from "./pages/tasks/detail";
import NavBar from "./components/navbar";
import LoginPage from "./pages/login/login";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="container py-5">
        <Routes>
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tasks/:id" element={<TaskDetail />} />

          <Route path="*" element={<Navigate to="/tasks" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
