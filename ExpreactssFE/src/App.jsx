import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState({ name: '', age: '' })
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  const handleAddUser = (e) => {
    e.preventDefault();

    const maxId = Math.max(0, ...users.map((user) => user.id))
    const newUser = { id: maxId + 1, ...input }

    fetch("http://localhost:3000/addUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="form-container container">
      <form onSubmit={handleAddUser}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            className="input-box"
          />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            name="age"
            id="age"
            value={input.age}
            onChange={(e) => setInput({ ...input, age: e.target.value })}
            className="input-box"
          />
        </div>
        <button type="submit" className="submit-button">ADD</button>
      </form>
    </div>
  )
}

export default App