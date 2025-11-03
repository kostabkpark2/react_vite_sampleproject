import { useState } from 'react'
import React from 'react'
import './App.css'
import Button from './Button.jsx'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        counter : 0
    }
  }
  componentDidMount = () => {
    console.log("화면이 렌더링 됬습니다.");
  }
  componentDidUpdate = () => {
    console.log("state 가 변경되면서 화면이 다시 렌더링 됬습니다.");
  }
  componentDidWillUnmount = () => {
    console.log("컴포넌트가 사라질 예정입니다.");
  }  
  onClick = () => {
    // this.setState( 
    //   {
    //   counter : 10
    //   }
    // );
    this.setState((prevState) => {
      return {counter : prevState.counter + 1 };
    });
    //this.state.counter = this.state.counter + 1;
    console.log("Button clicked ! -- " , this.state.counter);
  }
  render() { 
    return (
      <div>
        <h1>Class Component</h1>
        <p>{this.state.counter}</p>
        <button onClick={this.onClick}>Click</button>
      </div>
    )
  }
}

export default App
