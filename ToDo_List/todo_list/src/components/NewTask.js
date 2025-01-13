import React, { useState } from 'react';

function NewTask({ addTask }) {
  const [taskName, setTaskName] = useState('');

  const handleAdd = () => {
    if (taskName.trim() === '') {
      alert('Please enter a task.');
      return;
    }
    addTask(taskName);
    setTaskName('');
  };

  return (
    <div id="newtask">
      <input
        type="text"
        placeholder="Task to be done"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default NewTask;
