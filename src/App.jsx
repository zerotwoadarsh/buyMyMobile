import { Button } from "@material-tailwind/react";
import { useState } from 'react'


import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Headers from "./components/Header/Header";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Headers />
    </div>
  )
}

export default App
