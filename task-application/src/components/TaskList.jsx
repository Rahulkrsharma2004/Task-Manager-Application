import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../store';

const TaskList = React.lazy(() => import('./TaskList'));

const TaskListComponent = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskListComponent;
