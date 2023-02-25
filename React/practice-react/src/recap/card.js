import React from 'react'

function Card(props) {

  // if (){
  //   doSomething
  // }else{
  //   doSomethingElse
  // }

  //props.img ? <img src={props.img} alt='bear'/> : <img src='https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg' alt='car'/>

  // 0 - true
  // 1 - false 
  //ternary conditional statement

  return (
    <div className='card'>
        { props.img ? <img src={props.img} alt='bear'/> : <img src='https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg' alt='cat'/>}
        { props.director ? <h2>{props.director}</h2> : <h2>Unknown</h2>}
        { props.title ? <p>{props.title}</p> : <p>Unknown</p>}
        { props.url ? <a href={props.url.link}>Read More</a> : <p>Unknown</p>}
        { props.genre ? <p>{props.genre}</p> : <p>Unknown</p>}
    </div>
  )
}

export default Card