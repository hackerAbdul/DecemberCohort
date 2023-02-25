import './index.css'
import React from 'react'
import Card from './card'
import data from './data'
import List from '../lesson/fake'

function App() {

    console.log(List)

    const cardData = data.map(items =>{
        return (
            <Card key={items.img}
                director={items.director}
                name={items.author}
                img = {items.img}
                title = {items.title}
                url = {items.urls}
                year={items.year}
                runtime={items.runtime}
                genre={items.genres[0]}
            />
        )
    })


  return (
    <div className='recap'>
        <h1>{List}</h1>
        <div className='flex'>
            {cardData}
        </div>
    </div>
  )
}

export default App