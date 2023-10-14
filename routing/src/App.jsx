import { useState } from 'react'
import { BrowserRouter, Route, Link, Routes, NavLink } from 'react-router-dom'
import FirstPage from './Pages/FirstPage'
import SecondPage from './Pages/SecondPage'
import ThirdPage from './Pages/ThirdPage'
import './App.css'

function App() {

  const Protected = ({isLoggedIn, children})=> {
    if(isLoggedIn === true){
      return (
        <>
        {children}
        </>
      )
    } else{
      return (
        <>
        <h1 className="h1-error">NOT ALLOWED!</h1>
        </>
      )
    }
  }
  
  const [loggedIn, setLoggedIn] = useState(false)

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
        <Route path="/first" element={
          <Protected isLoggedIn={loggedIn}>
          <FirstPage />
        </Protected>
        } />
        <Route path="/second" element={
          <Protected isLoggedIn={loggedIn}>
            <SecondPage />
          </Protected>
        } />
        <Route path="/third" element={
          <Protected isLoggedIn={loggedIn}>
            <ThirdPage />
          </Protected>
        } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
