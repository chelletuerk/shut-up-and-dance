import React from 'react'

const Button = (props) => {
  return(
    <button
      onClick={props.handleClick} className={props.className}>{props.text}
    </button>
  )
}

export default Button
