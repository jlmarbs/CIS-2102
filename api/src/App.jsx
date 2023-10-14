import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("")

function getData(){
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      setTitle(json.message)
    })
}

  return (
    <>
      <button onClick={getData}>Click Here</button>
      <div>
      {<img src={title} alt="Dog" />}
      </div>
    </>
  )
}

export default App
