import React from "react"

function Button(props) {
  const style = {
    button: {
      background: props.btnColor,
    },
  }
  return (
    <button style={style.button} onClick={props.onHandle}>
      {props.children}
    </button>
  )
}

export default Button
