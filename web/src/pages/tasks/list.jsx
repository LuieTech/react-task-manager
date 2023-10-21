import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getTasks } from "../../services/groups-service";

function TaskList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTasks()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          navigate("/login");
        }
      });
  }, []);

  if (!data) return <div>Loading...</div>;

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
