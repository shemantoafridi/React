import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import NewTask from './components/NewTask';

function App() {
  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage on initialization
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    // Save tasks to localStorage whenever tasks change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    if (taskName.trim() !== '') {
      setTasks([...tasks, { name: taskName, completed: false }]);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="container1">
        <NewTask addTask={addTask} />
      </div>
      <br/>
  
      <div className="container2">
        <h1>Task List</h1>
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      </div>
    </div>
  );
  
  
}

export default App;
