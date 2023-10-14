import { useState } from 'react'
import Create from './Components/Create'
import Delete from './Components/Delete'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="App">
        <h2>TO-DO LIST</h2>
        <Create onCreate={createTask} />
        <Delete tasks={tasks} onDelete={deleteTask} />
      </div>
    </>
  );
}

export default App
