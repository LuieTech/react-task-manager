import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TaskDetail() {
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/v1/tasks/${params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return <div>Task {data?.title}</div>;
}

export default TaskDetail;
