import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <section>
      <h1>Task list</h1>
      <input type="text" />
      <section className="row">
        {data.map((task) => (
          <div className="col-3 p-5" key={task.id}>
            <h3>
              <Link to={`/tasks/${task.id}`}>{task.title}</Link>
            </h3>
            <p>{task.group.name}</p>
          </div>
        ))}
      </section>
    </section>
  );
}

export default TaskList;
