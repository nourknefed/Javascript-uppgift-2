import React from 'react'
import Book from './Book'

function BookCatalog({books, setBooks}) {

    if(books.length === 0){
        return (
            <div id="book-catalog" className="pe-4 mb-5 text-center">
                Library are empty. Please add a book.
            </div>
        )
    }
    return (
        <div id="book-catalog" className="pe-4 mb-5">
            <h5 className="mb-4">Available and borrowed books</h5>
            <div>
                {
                books.map(book => (
                    <Book key={book.id} book={book} books={books} setBooks={setBooks} />
                ))
                }  
            </div>
            
        </div>
    )
}

export default BookCatalog
