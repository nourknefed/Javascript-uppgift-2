import React, {useState} from 'react'
import Form from './Form'
import BookCatalog from './BookCatalog'

function Main() {

    const [books, setBooks] = useState([])

    return (
        <main className="container mt-5 ">
            <div className="row">
                <div className="col-5 pe-5 ">
                    <Form books={books} setBooks={setBooks} />
                </div>
                <div className="col-7  ps-5">
                    <BookCatalog  books={books} setBooks={setBooks} />
                </div>

            </div>
            
        </main>
    )
}

export default Main
