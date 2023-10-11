import { useEffect, useState } from "react";

function TaskList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/v1/tasks")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <h1>Task list</h1>

      <ul>
        {data.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
