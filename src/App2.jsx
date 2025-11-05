import { useState, useEffect, useReducer } from 'react'
import React from 'react'
import './App.css'
import Button from './Button.jsx'

// dispatcher 가 reducer 에게 시키는 일(Action)을 상세히 적는것
const reducer = (state, action) => {
  switch(action.type) {
    case "UP" : console.log("10씩 증가"); break;
    case "DOWN" : console.log("10씩 감소"); break;
    default : return;
  }
// "up" : counter(state) 를 payload 만큼 증가
// "down" : counter(state) 를 payload 만큼 감소
}; 


function App() {
  const [counter, setCounter] = useState(0);
  const [numberTotal, dispatch] = useReducer(reducer, 0);
  
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
        <Button onClick={()=>{
          dispatch({type : "UP", payload : 10})
        }} text="Up" />
        <Button onClick={()=>{
          dispatch({type : "DOWN", payload : 10})
        }} text="Down" />
      </div>
    )
}

export default App
