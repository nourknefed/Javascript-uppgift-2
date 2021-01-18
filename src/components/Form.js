import React, { useState } from 'react'
import uuid from 'react-uuid'



const Form = ({books,setBooks}) => {

  const [name,setName]= useState('')
  const [details,setDetails]= useState('')
  const [disable,setdisable]= useState(true)

    const nameHandler = (e) => {
        if(e.target.value > 1){
            setdisable(true)
        }
        else{
            setdisable(false)
        }

        setName(e.target.value)
    }
    const detailsHandler = (e) => {
        setDetails(e.target.value)
    }

    const sumbitHandler = (e) =>{
        e.preventDefault()
        setBooks ([ ...books, {name: name , details: details , borrowed: false, id:uuid()}])
        setName('')
        setDetails('')
        setdisable(true)

    }
    
    return (
    <form>
        <h5 className="mb-4">Add book to the Library</h5>
        <div className="mb-3">
            <input onChange={nameHandler} value={name} className="form-control" placeholder="Book name"/>
        </div>
        <div className="mb-4">
            <textarea onChange={detailsHandler} value={details} className="form-control" placeholder="Book details" rows="5"></textarea>
        </div>
        <div className="mb-3 text-center">
            <button disabled={disable} onClick={sumbitHandler} className="btn btn-primary w-25" >Add Book</button>
        </div>
    </form>
    )
}

export default Form
