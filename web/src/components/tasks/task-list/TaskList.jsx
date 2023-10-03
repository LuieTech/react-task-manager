import React, { useState } from 'react';
import tasksData from '../../../data/tasks.json';
import TaskItem from '../task-item/TaskItem';
import TaskFinder from '../task-finder/TaskFinder';
import { faker } from '@faker-js/faker';
import TaskForm from '../task-form/TaskForm';

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

  const handleSearchTask = (title) => {
    if (!title) {
      setTasks(tasksData);
    } else {
      setTasks(tasks.filter(task => task.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())));
    }
  }

  const handleCreateRandomTask = () => {
    setTasks([
      ...tasks,
      { title: faker.lorem.sentence(5), completed: false }
    ])
  }

  const handleSortTasks = (orientation) => {
    switch (orientation) {
      case 'asc':
        setTasks([...tasks].sort((t1, t2) => t1.title.localeCompare(t2.title)));
        break;
      case 'desc':
        setTasks([...tasks].sort((t1, t2) => t2.title.localeCompare(t1.title)));
        break;
      default:
    }
  }

  const handleCreateTask = (task) => {
    setTasks([
      ...tasks,
      task
    ])
  }

  return (
    <div className='d-flex flex-column gap-2'>
      <div className='d-flex gap-2'>
        <TaskFinder onSearch={handleSearchTask} onSort={handleSortTasks}  />
        <button className='btn btn-primary' onClick={handleCreateRandomTask}><i className='fa fa-plus'></i></button>
      </div>
      <ul className='list-group'>
        {tasks.map(task => (
          <TaskItem key={task.title} 
            task={task} 
            {...task}
            onDeleteTask={handleDeleteTask} 
            onCompleteTask={handleCompleteTask} />
        ))}
      </ul>
      <TaskForm onCreate={handleCreateTask} />
    </div>
  )
}

export default TaskList;