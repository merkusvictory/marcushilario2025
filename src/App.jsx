import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={
            <Home />
          } />
        </Routes>
      </div>
    </>
  )
}

export default App
