import { useState, useEffect } from 'react'
import './App.css'
import Display from './Display'

function App() {
  const [input, setInput] = useState("")
  const [students, setStudents] = useState([])
  
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/troy1129/jsonplaceholder/data')
      .then(response => response.json())
      .then(json => setStudents(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredStudents = input
    ? students.filter(({ id }) => id.toString().includes(input))
    : students;

  return (
    <>
      <h2>Input Student ID</h2>
      <div className="search-container">
        <input className="search-bar" value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <Display filteredStudents={filteredStudents} />
    </>
  )
}

export default App
