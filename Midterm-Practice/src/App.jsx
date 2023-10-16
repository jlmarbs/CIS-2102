import { useState, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Pages/Home'
import About from './Pages/About'
import ToDoList from './Pages/ToDoList'
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const handleSignIn = () => {
    setLoggedIn(true)
  }

  const handleSignOut = () => {
    setLoggedIn(false)
  }

  const ProtectedRoute = ({ element, isLoggedIn }) => {
    return isLoggedIn ? element : <Navigate to="/error" />
  }

  return (
    <>
      <BrowserRouter>
        <NavBar loggedIn={loggedIn} signIn={handleSignIn} signOut={handleSignOut} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element ={
            <ProtectedRoute element={<About />} isLoggedIn={loggedIn} />
          } />
          <Route path="/todo-list" element ={
            <ProtectedRoute element={<ToDoList />} isLoggedIn={loggedIn} />
          } />
          <Route path="/error" element={<h1 className="h1-error">NOT ALLOWED!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App