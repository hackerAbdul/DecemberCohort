import React from 'react'


function List(props) {

  return (
    <div className='contact-card'>
        {props.img ? <img src={props.img} alt='cat'/> : <img src='https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg' alt='bear' />}
        <div>{props.brand}</div>
        <div className='info'>
            <div>{props.models}</div>
        </div>
    </div>  
    )
}

export default List