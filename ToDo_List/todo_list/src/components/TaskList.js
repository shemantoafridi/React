import React from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask, toggleTaskCompletion }) {
  return (
    <div id="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          index={index}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
}

export default TaskList;
