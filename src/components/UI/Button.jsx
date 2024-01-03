import React from 'react'

const Button = ({name , onClick , type }) => {
  return (
   <button onClick={onClick} type={type} >{name}</button>
  //  test
  )
}

export default Button
