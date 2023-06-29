import React from 'react'
import "./RenderBooks.css"

const RenderBooks = (props) => {
  return (
    <div className='wrap'>
      <h1>{props.bookName}</h1>
      <div className='text-img'>
        <img src={props.url}/>
        <b>{props.price}</b>
      </div>
      <button onClick={()=>{props.onDeleteBook(props.id)}}>Delete</button>
    </div>
  )
}

export default RenderBooks
