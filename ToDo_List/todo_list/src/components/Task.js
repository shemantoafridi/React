import React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';

function Task({ task, index, deleteTask, toggleTaskCompletion }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleTaskCompletion(index)}>{task.name}</span>
      {/* <button className="delete" onClick={() => deleteTask(index)} startIcon={<DeleteIcon />}>
        <DeleteIcon />
      </button> */}
      <button className="delete" onClick={() => deleteTask(index)}>
        <i className="material-icons"></i>
      </button>
    </div>
  );
}

export default Task;
