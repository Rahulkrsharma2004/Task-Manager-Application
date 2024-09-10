import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store';

const AddTaskForm = () => {
  const [taskText, setTaskText] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      dispatch(addTask({ id: Date.now(), text: taskText }));
      setTaskText('');
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={handleChange}
        ref={inputRef}
        placeholder="Add a task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
