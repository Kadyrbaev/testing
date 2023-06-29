import React, { useState } from 'react'
import "./FormBooks.css"

const FormBooks = (props) => {
    const [bookName, setBookName] = useState()
    const [url, setUrl] = useState()
    const [price, setPrice] = useState()

    const getBookNameHandler=(e)=>{
        setBookName(e.target.value)
    }
    const getUrlHandler=(e)=>{
        setUrl(e.target.value)
    }
    const getPriceHandler=(e)=>{
        setPrice(e.target.value)
    }

    const addBookHandler=(e)=>{
        e.preventDefault()

        const obj = {
            bookName: bookName,
            url: url,
            price: price,
            id: Math.random()
        }

        props.onGetBookInfo(obj)
    }
  return (
    <form className='wrap-form' onSubmit={addBookHandler}>
        <input placeholder='bookName' onChange={getBookNameHandler}/>
        <input placeholder='url-Img' onChange={getUrlHandler}/>
        <input placeholder='price' onChange={getPriceHandler}/>
        <button type='submit'>Add book</button>
    </form>
  )
}

export default FormBooks
