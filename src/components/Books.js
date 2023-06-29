import { useState } from "react"
import FormBooks from "./FormBooks"
import RenderBooks from "./RenderBooks"
import './RenderBooks.css'
import Modal from "./Modal"

const books = [
    {
        bookName: "TEST",
        url: "https://wallpapers.com/images/featured/hd-car-o3yvt8dloqz5cvm4.jpg",
        price: "500 som",
        id: "1"
    },
    {
        bookName: "TEST",
        url: "https://images6.alphacoders.com/525/525252.jpg",
        price: "500 som",
        id: "2"
    },
]

const Books=()=>{

    const [state, setState] = useState(books)
    const [showModal, setShowModal] = useState(null) 

    console.log(state);

    const getBookInfo=(getBooks)=>{
        setShowModal(false)
        console.log(getBooks);
        setState((prev)=>[...prev, getBooks])

    }

    const deleteBook=(id)=>{
        const newArr = state.filter((el)=>{
            if(el.id!==id){
                return el
            }
        })
        console.log(newArr);
        setState(newArr)
        console.log(id);
    }

    function addBookHandler(){
        setShowModal(true)
    }

    return(
        <div>
            <h1>NEW BRANCH</h1>
            <h1>BOOK_COMP</h1>
            {showModal === true ? <FormBooks onGetBookInfo={getBookInfo}/> : ""}
            {showModal === true ? <Modal/> : ""}
            <h2 onClick={addBookHandler}>ADD BOOK</h2>
            <h1 className="books">BOOKS</h1>
            {state.map((el)=>(
                <RenderBooks onDeleteBook={deleteBook} key={el.id} id={el.id} bookName={el.bookName} url={el.url} price={el.price} />
            ))}
        </div>
    )
}
export default Books