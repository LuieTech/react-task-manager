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
    <section>
      <h1>Task list</h1>
      <input type="text" />
      <section className="row">
        {data.map((task) => (
          <div className="col-3 p-5" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.group.name}</p>
          </div>
        ))}
      </section>
    </section>
  );
}

export default TaskList;
