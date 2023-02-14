import React from 'react'
import Book from './Books'
import './index.css'

function Bookslist() {
  return (
    <div className='Parent'>
        <Book 
            img = "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1496420767/a/01/c4/158645-ml-1243735.jpg"
            name = "Harry Potter & the Philosopher's Stone"
            Author = "J.K Rowling"
            Book = "Book 1"
        />
        <Book 
            img = "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1496408647/a/df/d8/158646-ml-1256415.jpg"
            name = "Harry Potter & the Chamber of Secrets"
            Author = "J.K Rowling"
            Book = "Book 2"
        />
        <Book 
            img = "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1496408647/a/73/ff/158647-ml-1256428.jpg"
            name = "Harry Potter & the Prisoner of Azkaban"
            Author = "J.K Rowling"
            Book = "Book 3"
        />
        <Book 
            img = "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1496408527/a/82/07/158648-ml-1256441.jpg"
            name = "Harry Potter & the Goblet of Fire"
            Author = "J.K Rowling"
            Book = "Book 4"
        />
        <Book 
            img = "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1496408527/a/88/6a/158649-ml-1256454.jpg"
            name = "Harry Potter & the Order of the Phoenix"
            Author = "J.K Rowling"
            Book = "Book 5"
        />
        <Book 
            img = "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1496408527/a/93/a8/158650-ml-1256467.jpg"
            name = "Harry Potter & the Half-Blood Prince"
            Author = "J.K Rowling"
            Book = "Book 6"
        />
        <Book 
            img = "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1496408527/a/52/ea/158651-ml-1256480.jpg"
            name = "Harry Potter & the Deathly Hallows"
            Author = "J.K Rowling"
            Book = "Book 7"
        />
        <Book 
            img = "https://cdn.waterstones.com/bookjackets/large/9780/0074/9780007448036.jpg"
            name = "A Song of Ice and Fire"
            Author = "George R.R. Martin"
            Book = "Book 1"
        />
    </div>
  )
}

export default Bookslist