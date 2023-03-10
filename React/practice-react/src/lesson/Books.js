import React from 'react'


function Book(props) {

  return (
    <div className='contact-card'>
        {props.img ? <img src={props.img} alt='cat'/> : <img src='https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg' alt='bear' />}
        <h3>{props.title}</h3>
        <div className='info'>
            <p>{props.author}</p>
            <p>{props.Book}</p>
        </div>
    </div>  
    )
}

export default Book