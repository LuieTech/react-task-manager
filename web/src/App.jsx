import GroupList from "./components/groups/group-list/GroupList";
import TaskFinder from "./components/tasks/task-finder/TaskFinder";
import TaskList from "./components/tasks/task-list/TaskList"

function App() {

  return (
    <div className="container py-5">
      <GroupList />
      <TaskList />
    </div>
  )
}

export default App;
