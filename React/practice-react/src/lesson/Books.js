import React from 'react'


function Book(props) {
    console.log(props)
  return (
    <div className='contact-card'>
        <img src={props.img} alt='cat'/>
        <h3>{props.name}</h3>
        <div className='info'>
            <p>{props.Author}</p>
            <p>{props.Book}</p>
        </div>
    </div>  
    )
}

export default Book