import React from 'react'
import './index.css'
import data from './data'

console.log(data)

function Carslist() {


    const cards = data.map((items,index) =>{
        return (
            <div className='contact-card' key={index}>
                <h2>{items.brand}</h2>
                {items.models.map((c,i)=>{
                    return(
                        <div className='contact-card' key={i}>
                            <p>{items.models[i]}</p>
                        </div>
                    )
                })}
            </div>
        )
    })


    return (
    <div className='Parent'>
        {cards}
    </div>
    )
}

export default Carslist