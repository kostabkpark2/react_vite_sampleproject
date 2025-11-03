import { useState } from 'react'
import PropTypes from 'prop-types'
// import './App.css'
import "./style.css"

function Button(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className='btn' onClick={props.onClick}>
        {props.text}
      </button>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
    </>
  )
}

Button.propTypes = {
  text : PropTypes.string.isRequired
}

export default Button
