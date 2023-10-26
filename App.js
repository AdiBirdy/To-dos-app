import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [editedTask, setEditedTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, priority: 1 }]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index].text);
  };

  const updateTask = () => {
    if (editedTask.trim() !== '') {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = { text: editedTask, priority: updatedTasks[editIndex].priority };
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditedTask('');
    }
  };

  const changePriority = (index, priority) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = { text: updatedTasks[index].text, priority };
    setTasks(updatedTasks);
  };

  return (
    <div className="App" style={{ background: 'linear-gradient(to bottom, #141E30, #243B55)', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1
        style={{
          color: '#FFFFFF',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          fontFamily: 'Arial, sans-serif',
          fontSize: '36px',
          marginBottom: '20px',
        }}
      >
         To-Do App
      </h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Add a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{ padding: '10px', border: 'none', borderRadius: '5px', marginRight: '10px', fontSize: '16px' }}
        />
        <button
          onClick={addTask}
          style={{
            backgroundColor: '#01AAFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '10px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Add
        </button>
      </div>
      {tasks.length === 0 ? (
        <p style={{ color: '#FFFFFF', marginTop: '20px' }}>No tasks added yet. Start by adding a task!</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, marginTop: '20px' }}>
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                margin: '10px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                backgroundColor: '#192A4D',
                color: '#FFFFFF',
              }}
            >
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                    style={{ marginRight: '10px' }}
                  />
                  <button
                    onClick={updateTask}
                    style={{
                      backgroundColor: '#01AAFF',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      fontSize: '16px',
                    }}
                  >
                    Update
                  </button>
                </>
              ) : (
                <>
                  {task.text}
                  <span> (Priority: {task.priority})</span>
                  <button
                    onClick={() => removeTask(index)}
                    style={{
                      backgroundColor: '#FF4757',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      marginLeft: '5px',
                    }}
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => editTask(index)}
                    style={{
                      backgroundColor: '#FFD166',
                      color: '#333',
                      border: 'none',
                      borderRadius: '5px',
                      marginLeft: '5px',
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => changePriority(index, task.priority + 1)}
                    style={{
                      backgroundColor: '#17A2B8',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      marginLeft: '5px',
                    }}
                  >
                    Increase Priority
                  </button>
                  <button
                    onClick={() => changePriority(index, task.priority - 1)}
                    style={{
                      backgroundColor: '#6C757D',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      marginLeft: '5px',
                    }}
                  >
                    Decrease Priority
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;