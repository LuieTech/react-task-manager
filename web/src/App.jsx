import { Navigate, Route, Routes } from "react-router-dom";
import TaskList from "./pages/tasks/list";

function App() {
  return (
    <div className="container py-5">
      <Routes>
        <Route path="/tasks" element={<TaskList />} />
      </Routes>
    </div>
  );
}

export default App;
