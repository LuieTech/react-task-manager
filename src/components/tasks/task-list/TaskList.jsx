import React, { useState } from 'react';
import tasksData from '../../../data/tasks.json';
import TaskItem from '../task-item/TaskItem';

function TaskList() {
  const [tasks, setTasks] = useState(tasksData);

  const handleDeleteTask = (title) => {
    setTasks(tasks.filter(task => task.title !== title));
  }

  const handleCompleteTask = (title) => {
    const completedTasks = tasks.map((task) => {
      if (task.title === title) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(completedTasks);
  }

  return (
    <ul className='list-group'>
      {tasks.map(task => (
        <TaskItem key={task.title} 
          task={task} 
          onDeleteTask={handleDeleteTask} 
          onCompleteTask={handleCompleteTask} />
      ))}
    </ul>
  )
}

export default TaskList;
