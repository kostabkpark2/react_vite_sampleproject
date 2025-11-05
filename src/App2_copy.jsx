import { useState, useEffect, useRef } from 'react'
import React from 'react'
import './App.css'
import Button from './Button.jsx'

function App() {
  const [state, setState] = useState(0);
  const ref = useRef(0);
  const onClickState = () => {
    setState((state) => {
      return state = state + 1 ;
    });
  }
  const onClickRef = () => {
    console.log
    ref.current += 1;
  }
  return (
      <div>
        <h1>Class Component</h1>
        <p>{state}</p>
        <Button onClick={onClickState} text="ClickState" />
        <p>{ref.current}</p>
        <Button onClick={onClickRef} text="ClickRef" />
      </div>
    )
}

export default App
