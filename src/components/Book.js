import React from 'react'

function Book({ book, books, setBooks }) {

    const removeHandler = () => {

        setBooks(books.filter(item => item.id !== book.id))
    }

    const availableHandler = () => {
        setBooks(books.map(item => {
            if(item.id === book.id) {
                return { ...item, borrowed: !item.borrowed}
            }
            return item
        }))

    }



    return (
        <div className="border rounded mb-3 p-2">
            <div className="d-flex justify-content-between align-items-center p-2">
            <div className= {`${book.borrowed ? 'borrowed' : 'text-dark'} `}>
                <div className="name" >{book.name}</div>
                <div className="details">{book.details}</div>
            </div>
            <div>
                <i onClick={availableHandler} className= {`fas fa-book-reader ${book.borrowed ? 'borrowed' : 'fas fa-check-circle available'} `} ></i>
                <i onClick={removeHandler} className="fas fa-trash remove"></i>
            </div>
            </div>
            
        </div>
    )
}

export default Book
