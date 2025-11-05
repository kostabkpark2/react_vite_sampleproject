import { useState, useEffect, useReducer } from 'react'
import React from 'react'
import './App.css'
import Button from './Button.jsx'

// dispatcher 가 reducer 에게 시키는 일(Action)을 상세히 적는것
const reducer = (state, action) => {
  switch(action.type) {
    case "UP" : 
      console.log("10씩 증가"); 
      return state + action.payload ;
    case "DOWN" : 
      console.log("10씩 감소"); 
      return state - action.payload ;
    default : return state;
  }
// "up" : counter(state) 를 payload 만큼 증가
// "down" : counter(state) 를 payload 만큼 감소
}; 


function App() {
  const [numberTotal, dispatch] = useReducer(reducer, 0);
  
  return (
      <div>
        <h1>Class Component</h1>
        <p>{numberTotal}</p>
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
