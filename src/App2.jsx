import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import Button from './Button.jsx'

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((counter) => {
      return counter = counter + 1 ;
    });
  }
  const func = () => {
    console.log("화면이 최초 렌더링 되었습니다. -- componentDidMount")
  };
  const func2 = () => {
    console.log("화면이 업데이트 되었습니다. -- componentDidUpdate")
  };
  useEffect(func, [] );  // componentDidMount() ;
  useEffect(func2, [counter] );  // componentDidUpdate() ;
  return (
      <div>
        <h1>Class Component</h1>
        <p>{counter}</p>
        <Button onClick={onClick} text="Click" />
      </div>
    )
}

export default App
