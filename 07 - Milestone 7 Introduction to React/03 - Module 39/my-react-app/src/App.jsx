import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClick1() {
    alert('Click on button 1');
  }

  const handleClick2 = () => {
    alert('Click on button 2');
  }

  const showSum = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts</h3>
      <button onClick={handleClick1}>Click 1</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => {alert('Click on button 3')}}>Click 3</button>
      <button onClick={() => showSum(5)}>Show Sum</button>
    </>
  )
}

export default App
