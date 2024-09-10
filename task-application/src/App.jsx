import  { useEffect } from 'react';
import { Suspense } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

const App = () => {
  useEffect(() => {
    // Simulate fetching tasks
    console.log('Fetching tasks...');
    return () => {
      console.log('Cleanup...');
    };
  }, []);

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTaskForm />
      <Suspense fallback={<div>Loading...</div>}>
        <TaskList />
      </Suspense>
    </div>
  );
};

export default App;
