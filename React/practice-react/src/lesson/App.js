import React from 'react'
import Book from './Books'
import './index.css'
import data from './data'

console.log(data)

function Bookslist() {


    const cards = data.map(items =>{
        return (
            <Book key={items.img}
                id={items.id}
                img={items.img}
                title={items.title}
                author={items.author}
                Book={items.Book}
            />
        )
    })


    return (
    <div className='Parent'>
        {cards}
    </div>
    )
}

export default Bookslist