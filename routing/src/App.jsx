import { useState } from 'react'
import { BrowserRouter, Route, Link, Routes, NavLink, Navigate } from 'react-router-dom'
import FirstPage from './Pages/FirstPage'
import SecondPage from './Pages/SecondPage'
import ThirdPage from './Pages/ThirdPage'
import './App.css'

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false)

  const ProtectedRoute = ({ element, isLoggedIn }) => {
    return isLoggedIn ? element : <Navigate to="/error" />
  }

  return (
    <>
    <BrowserRouter>
    <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn == false ? "Sign In" : "Sign Out"}</button>
    <header>
      <nav className="nav-container">
        <NavLink to="/first" className="nav-link">Input ID + API</NavLink>
        <NavLink to="/second" className="nav-link">Todo List + Validation</NavLink>
        <NavLink to="/third" className="nav-link">Contact Form</NavLink>
      </nav>
    </header>
      <Routes>
        <Route path="/first" element={<FirstPage />} />
        <Route path="/second" element={
          <ProtectedRoute element={<SecondPage />} isLoggedIn={loggedIn} />
        } />
        <Route path="/third" element={
          <ProtectedRoute element={<ThirdPage />} isLoggedIn={loggedIn} />
        } />
        <Route path="/error" element={<h1 className="h1-error">NOT ALLOWED!</h1>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
